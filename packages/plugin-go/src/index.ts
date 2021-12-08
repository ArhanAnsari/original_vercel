import { convertRuntimeToPlugin } from '@vercel/build-utils';
import * as go from '@vercel/go';

export const build = convertRuntimeToPlugin(go.build, 'vercel-plugin-go', '.go');

export const startDevServer = go.startDevServer;