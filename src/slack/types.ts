export type SlackBlock = {
  type: string;
  text: string | SlackBlock;
};

export interface SlackCommandPayload {
  token: string;
  command: string;
  text: string;
  response_url: string;
  trigger_id: string;
  user_id: string;
  user_name: string;
  team_id: string;
  api_app_id: string;
  channel_id: string;
  channel_name: string;
}
