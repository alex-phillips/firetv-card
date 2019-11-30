import { ActionConfig } from 'custom-card-helpers';

export interface FireTVCardConfig {
  type: string;
  entity: string;
  remote?: string;
  name?: string;
  theme?: string;
  tv?: boolean;
  power: ActionButtonConfig;
  volume_up: ActionButtonConfig;
  volume_down: ActionButtonConfig;
  volume_mute: ActionButtonConfig;
  UP: ActionButtonConfig;
  DOWN: ActionButtonConfig;
  LEFT: ActionButtonConfig;
  RIGHT: ActionButtonConfig;
  home: ActionButtonConfig;
  info: ActionButtonConfig;
  back: ActionButtonConfig;
  CENTER: ActionButtonConfig;
  reverse: ActionButtonConfig;
  play: ActionButtonConfig;
  forward: ActionButtonConfig;
  apps?: AppConfig[];
}

export interface ActionButtonConfig {
  show?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

export interface AppConfig {
  app?: string;
  image?: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}
