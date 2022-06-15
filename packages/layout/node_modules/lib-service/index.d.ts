declare module "lib-service" {
  interface ServiceConfig {
    url: string;
    dataType?: "json" | "formdata" | "x-www-form-urlencoded";
    method?:
      | "GET"
      | "POST"
      | "PUT"
      | "DELETE"
      | "OPTIONS"
      | "get"
      | "post"
      | "put"
      | "delete"
      | "options";
    headers?: Object;
  }

  export default function getServiceFactory(
    globalConfig: Record<string, any>
  ): <
    TConfig extends Record<string, ServiceConfig>,
    TName extends keyof TConfig
  >(
    config: TConfig,
    options?: { interceptors?: Array<unknown> }
  ) => Record<TName, <R = any>(params?: Record<string, any>) => Promise<R>>;
}
