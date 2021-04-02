import { WebClient } from '@slack/web-api';
import { SlackBlock } from './types';

const SlackClient = new WebClient(process.env.BOT_TOKEN);

export const write = async (channel: string, blocks: SlackBlock) => {
  await SlackClient.chat.postMessage({
    channel,
    text: (blocks.text as SlackBlock).text as string,
    mrkdwn: true,
  });
};

export default SlackClient;
