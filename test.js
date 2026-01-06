const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // 收集控制台消息
    const consoleMessages = [];
    page.on('console', msg => {
        consoleMessages.push({
            type: msg.type(),
            text: msg.text()
        });
    });
    
    // 收集页面错误
    const pageErrors = [];
    page.on('pageerror', err => {
        pageErrors.push(err.message);
    });
    
    try {
        // 打开本地HTML文件
        await page.goto('file:///workspace/cat1-industry-atlas/index.html', {
            waitUntil: 'networkidle'
        });
        
        // 等待图表加载
        await page.waitForTimeout(2000);
        
        // 检查图表是否存在
        const charts = await page.evaluate(() => {
            const chart1 = document.getElementById('moduleMarketShareChart');
            const chart2 = document.getElementById('chipMarketShareChart');
            const chart3 = document.getElementById('priceTrendChart');
            const chart4 = document.getElementById('marketForecastChart');
            return {
                chart1Exists: !!chart1,
                chart2Exists: !!chart2,
                chart3Exists: !!chart3,
                chart4Exists: !!chart4,
                chart1Parent: chart1 ? chart1.parentElement.className : 'N/A',
                chart2Parent: chart2 ? chart2.parentElement.className : 'N/A'
            };
        });
        
        console.log('=== 图表元素检查 ===');
        console.log('moduleMarketShareChart 存在:', charts.chart1Exists);
        console.log('chipMarketShareChart 存在:', charts.chart2Exists);
        console.log('priceTrendChart 存在:', charts.chart3Exists);
        console.log('marketForecastChart 存在:', charts.chart4Exists);
        
        console.log('\n=== 控制台消息 ===');
        consoleMessages.forEach(msg => {
            if (msg.type === 'error' || msg.type === 'warning') {
                console.log(`[${msg.type}] ${msg.text}`);
            }
        });
        
        console.log('\n=== 页面错误 ===');
        if (pageErrors.length === 0) {
            console.log('没有页面错误');
        } else {
            pageErrors.forEach(err => console.log(err));
        }
        
        // 检查Chart对象
        const chartCheck = await page.evaluate(() => {
            return {
                ChartExists: typeof Chart !== 'undefined',
                hasChart: document.querySelectorAll('canvas').length
            };
        });
        
        console.log('\n=== Chart对象检查 ===');
        console.log('Chart库加载状态:', chartCheck.ChartExists ? '成功' : '失败');
        console.log('Canvas元素数量:', chartCheck.hasChart);
        
    } catch (error) {
        console.error('测试失败:', error.message);
    } finally {
        await browser.close();
    }
})();
