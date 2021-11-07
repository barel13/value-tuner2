import {Injectable} from '@angular/core';
import ReconnectingWebSocket from 'reconnecting-websocket';
import {ApexAxisChartSeries} from 'ng-apexcharts';

@Injectable({
  providedIn: 'root'
})
export class FireLogService {
  private static readonly ENDPOINT = 'ws://localhost:8080/firelog';
  private static readonly SIZE = 200;
  public values: ApexAxisChartSeries = []; // new Map<string, Queue<Log>>(); // [topic, values]
  private webSocket: ReconnectingWebSocket;

  public connect(): void {
    this.webSocket = new ReconnectingWebSocket(FireLogService.ENDPOINT);
    this.webSocket.onmessage = (event) => {
      const log: Log = JSON.parse(event.data);
      this.add(log);
    };
  }

  public disconnect(): void {
    this.webSocket.close();
  }

  private contains(topic: string): boolean {
    for (const valuesKey of this.values) {
      if (valuesKey.name === topic) {
        return true;
      }
    }
    return false;
  }

  private get(topic: string): any {
    for (const value of this.values) {
      if (value.name === topic) {
        return value;
      }
    }
  }

  private add(log: Log): void {
    if (this.contains(log.topic)) {
      if ((this.get(log.topic).data.length + 1) >= FireLogService.SIZE) {
        this.get(log.topic).data.shift();
      }
      this.get(log.topic).data.push({
        x: log.time,
        y: log.value
      });
    } else {
      this.values.push({
        name: log.topic,
        data: [{
          x: log.time,
          y: log.value
        }]
      });
    }
  }
}

export interface Log {
  topic: string;
  value: number;
  time: number;
}
