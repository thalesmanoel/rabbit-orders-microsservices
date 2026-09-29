import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

export interface DatabaseModuleOptions {
  urlEnvVar: string;
  entities: EntityClassOrSchema[];
}

@Module({})
export class DatabaseModule {
  static forRoot(options: DatabaseModuleOptions): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => {
            const url = config.get<string>(options.urlEnvVar);

            if (!url) {
              throw new Error(`Variavel de ambiente ${options.urlEnvVar} nao definida`);
            }

            return {
              type: 'postgres' as const,
              url,
              entities: options.entities,
              synchronize: config.get('DB_SYNCHRONIZE') === 'true',
              logging: config.get('DB_LOGGING') === 'true',
              retryAttempts: 10,
              retryDelay: 3000,
            };
          },
        }),
      ],
    };
  }
}
