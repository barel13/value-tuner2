import {Injectable} from '@angular/core';
import {BaseConstant, Constant, Utils} from '../models/BaseConstant';
import ReconnectingWebSocket from 'reconnecting-websocket';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  private static readonly ENDPOINT = 'ws://localhost:8080/app';
  public constants = new Map<string, Set<Constant>>();
  private webSocket: ReconnectingWebSocket;
  private serverEndpoint = 'http://localhost:8080/app';

  constructor(private http: HttpClient) {
  }

  public connect(): void {
    this.constants.clear(); // TODO: add functionality

    const shooter = new Set<Constant>();
    shooter.add(Utils.createConstant(Utils.createKey('hey', 'shooter'), 'shooter/hey', 38));
    shooter.add(Utils.createConstant(Utils.createKey('hey1', 'shooter'), 'shooter/hey1', 38));
    shooter.add(Utils.createConstant(Utils.createKey('hey2', 'shooter'), 'shooter/hey2', 38));
    shooter.add(Utils.createConstant(Utils.createKey('hey3', 'shooter'), 'shooter/hey3', 38));
    shooter.add(Utils.createConstant(Utils.createKey('hey4', 'shooter'), 'shooter/hey4', 38));
    shooter.add(Utils.createConstant(Utils.createKey('hey5', 'shooter'), 'shooter/hey5', 38));
    shooter.add(Utils.createConstant(Utils.createKey('kp', 'shooter'), 'shooter/kp', 38));
    shooter.add(Utils.createConstant(Utils.createKey('ki', 'shooter'), 'shooter/ki', 38));
    shooter.add(Utils.createConstant(Utils.createKey('kd', 'shooter'), 'shooter/kd', 38));
    shooter.add(Utils.createConstant(Utils.createKey('kf', 'shooter'), 'shooter/kf', 38));
    shooter.add(Utils.createConstant(Utils.createKey('kp_s', 'shooter'), 'shooter/kp_s', 38));
    shooter.add(Utils.createConstant(Utils.createKey('ki_s', 'shooter'), 'shooter/ki_s', 38));
    shooter.add(Utils.createConstant(Utils.createKey('kd_s', 'shooter'), 'shooter/kd_s', 38));
    shooter.add(Utils.createConstant(Utils.createKey('kf_s', 'shooter'), 'shooter/kf_s', 38));
    this.constants.set('shooter', shooter);
    const turret = new Set<Constant>();
    turret.add(Utils.createConstant(Utils.createKey('hey', 'turret'), 'turret/hey', 38));
    turret.add(Utils.createConstant(Utils.createKey('hey1', 'turret'), 'turret/hey1', 38));
    turret.add(Utils.createConstant(Utils.createKey('hey2', 'turret'), 'turret/hey2', 38));
    turret.add(Utils.createConstant(Utils.createKey('hey3', 'turret'), 'turret/hey3', 38));
    turret.add(Utils.createConstant(Utils.createKey('hey4', 'turret'), 'turret/hey4', 38));
    turret.add(Utils.createConstant(Utils.createKey('hey5', 'turret'), 'turret/hey5', 38));
    this.constants.set('turret', turret);
    const intake = new Set<Constant>();
    intake.add(Utils.createConstant(Utils.createKey('hey', 'intake'), 'intake/hey', 38));
    intake.add(Utils.createConstant(Utils.createKey('hey1', 'intake'), 'intake/hey1', 38));
    intake.add(Utils.createConstant(Utils.createKey('hey2', 'intake'), 'intake/hey2', 38));
    intake.add(Utils.createConstant(Utils.createKey('hey3', 'intake'), 'intake/hey3', 38));
    intake.add(Utils.createConstant(Utils.createKey('hey4', 'intake'), 'intake/hey4', 38));
    intake.add(Utils.createConstant(Utils.createKey('hey5', 'intake'), 'intake/hey5', 38));
    this.constants.set('intake', intake);
    const funnel = new Set<Constant>();
    funnel.add(Utils.createConstant(Utils.createKey('hey', 'funnel'), 'funnel/hey', 38));
    funnel.add(Utils.createConstant(Utils.createKey('hey1', 'funnel'), 'funnel/hey1', 38));
    funnel.add(Utils.createConstant(Utils.createKey('hey2', 'funnel'), 'funnel/hey2', 38));
    funnel.add(Utils.createConstant(Utils.createKey('hey3', 'funnel'), 'funnel/hey3', 38));
    funnel.add(Utils.createConstant(Utils.createKey('hey4', 'funnel'), 'funnel/hey4', 38));
    funnel.add(Utils.createConstant(Utils.createKey('hey5', 'funnel'), 'funnel/hey5', 38));
    this.constants.set('funnel', funnel);
    const conveyor = new Set<Constant>();
    conveyor.add(Utils.createConstant(Utils.createKey('hey', 'conveyor'), 'conveyor/hey', 38));
    conveyor.add(Utils.createConstant(Utils.createKey('hey1', 'conveyor'), 'conveyor/hey1', 38));
    conveyor.add(Utils.createConstant(Utils.createKey('hey2', 'conveyor'), 'conveyor/hey2', 38));
    conveyor.add(Utils.createConstant(Utils.createKey('hey3', 'conveyor'), 'conveyor/hey3', 38));
    conveyor.add(Utils.createConstant(Utils.createKey('hey4', 'conveyor'), 'conveyor/hey4', 38));
    conveyor.add(Utils.createConstant(Utils.createKey('hey5', 'conveyor'), 'conveyor/hey5', 38));
    this.constants.set('conveyor', conveyor);
    const climber = new Set<Constant>();
    climber.add(Utils.createConstant(Utils.createKey('hey', 'climber'), 'climber/hey', 38));
    climber.add(Utils.createConstant(Utils.createKey('hey1', 'climber'), 'climber/hey1', 38));
    climber.add(Utils.createConstant(Utils.createKey('hey2', 'climber'), 'climber/hey2', 38));
    climber.add(Utils.createConstant(Utils.createKey('hey3', 'climber'), 'climber/hey3', 38));
    climber.add(Utils.createConstant(Utils.createKey('hey4', 'climber'), 'climber/hey4', 38));
    climber.add(Utils.createConstant(Utils.createKey('hey5', 'climber'), 'climber/hey5', 38));
    this.constants.set('climber', climber);
    const drivetrain = new Set<Constant>();
    drivetrain.add(Utils.createConstant(Utils.createKey('hey', 'drivetrain'), 'drivetrain/hey', 38));
    drivetrain.add(Utils.createConstant(Utils.createKey('hey1', 'drivetrain'), 'drivetrain/hey1', 38));
    drivetrain.add(Utils.createConstant(Utils.createKey('hey2', 'drivetrain'), 'drivetrain/hey2', 38));
    drivetrain.add(Utils.createConstant(Utils.createKey('hey3', 'drivetrain'), 'drivetrain/hey3', 38));
    drivetrain.add(Utils.createConstant(Utils.createKey('hey4', 'drivetrain'), 'drivetrain/hey4', 38));
    drivetrain.add(Utils.createConstant(Utils.createKey('hey5', 'drivetrain'), 'drivetrain/hey5', 38));
    this.constants.set('drivetrain', drivetrain);

    this.webSocket = new ReconnectingWebSocket(ConstantsService.ENDPOINT);

    this.webSocket.onopen = event => {
      console.log('Open: ' + event);
      this.constants.clear();
    };

    this.webSocket.onclose = event => {
      console.log('Close: ' + event);
    };

    this.webSocket.onmessage = event => {
      const constant: BaseConstant = JSON.parse(event.data);
      const fullConstant = Utils.createFromConstant(constant);
      if (this.constants.has(constant.key.subsystem)) {
        if (!this.constants.get(constant.key.subsystem).has(fullConstant)) {
          this.constants.get(constant.key.subsystem).add(fullConstant);
        }
      } else {
        const set: Set<Constant> = new Set<Constant>();
        set.add(fullConstant);
        this.constants.set(constant.key.subsystem, set);
      }
    };
  }

  public update(constant: BaseConstant): void {
    this.http.put<BaseConstant>(this.serverEndpoint, constant);
  }

  public disconnect(): void {
    this.webSocket.close();
  }
}
