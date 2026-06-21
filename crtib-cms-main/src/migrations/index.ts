import * as migration_20260407_033503 from './20260407_033503';
import * as migration_20260415_144446 from './20260415_144446';
import * as migration_20260609_230538 from './20260609_230538';
import * as migration_20260610_003142 from './20260610_003142';
import * as migration_20260619_000000 from './20260619_000000';
import * as migration_20260621_000000 from './20260621_000000';

export const migrations = [
  {
    up: migration_20260407_033503.up,
    down: migration_20260407_033503.down,
    name: '20260407_033503',
  },
  {
    up: migration_20260415_144446.up,
    down: migration_20260415_144446.down,
    name: '20260415_144446',
  },
  {
    up: migration_20260609_230538.up,
    down: migration_20260609_230538.down,
    name: '20260609_230538',
  },
  {
    up: migration_20260610_003142.up,
    down: migration_20260610_003142.down,
    name: '20260610_003142',
  },
  {
    up: migration_20260619_000000.up,
    down: migration_20260619_000000.down,
    name: '20260619_000000',
  },
  {
    up: migration_20260621_000000.up,
    down: migration_20260621_000000.down,
    name: '20260621_000000',
  },
];
