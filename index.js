import { GlideClusterClient } from '@valkey/valkey-glide';

await GlideClusterClient.createClient({
  addresses: [{ host: 'host.docker.internal', port: 6379 }]
});
