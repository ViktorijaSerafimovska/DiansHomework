package mk.ukim.finki.stockedgemk.web;


import mk.ukim.finki.stockedgemk.model.Stock;
import mk.ukim.finki.stockedgemk.model.StockData;
import mk.ukim.finki.stockedgemk.service.StockDataServiceImpl;
import mk.ukim.finki.stockedgemk.service.StockServiceImpl;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/stock-data")
public class StockDataController {
    private final StockDataServiceImpl stockDataService;
    private final StockServiceImpl stockService; // Inject StockService


    public StockDataController(StockDataServiceImpl stockDataService, StockServiceImpl stockService) {
        this.stockDataService = stockDataService;
        this.stockService = stockService;
    }

    @GetMapping
    public List<StockData> getStockData(
            @RequestParam String ticker, // Менуваме id во ticker
            @RequestParam String startDate,
            @RequestParam String endDate
    ) {
        // Пронајдете го ID од тикер
        System.out.println("Received request: ticker=" + ticker + ", startDate=" + startDate + ", endDate=" + endDate);
        Stock stock = stockService.findByTicker(ticker);
        if (stock == null) {
            System.out.println("Stock not found for ticker: " + ticker);
            throw new RuntimeException("Stock not found for ticker: " + ticker);
        }
        System.out.println("Found stock: " + stock.getId());

        return stockDataService.findByStockIdAndDateRange(
                stock.getId(), LocalDate.parse(startDate), LocalDate.parse(endDate)
        );
    }

    @PostMapping
    public StockData createStockData(@RequestBody StockData stockData) {
        return stockDataService.save(stockData);
    }



}
