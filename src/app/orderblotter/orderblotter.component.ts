import { OrderService } from "./../services/order.service";
import { Component, OnInit } from "@angular/core";
import { Order } from "../models/order";

@Component({
  selector: "orderblotter",
  templateUrl: "./orderblotter.component.html",
  styleUrls: ["./orderblotter.component.css"]
})
export class OrderblotterComponent implements OnInit {
  orders: Array<Order>;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }
}
