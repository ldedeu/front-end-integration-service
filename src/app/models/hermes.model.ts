export class Hermes{
  constructor(
      public source_id: string,
      public delivered: string,
      public application_payload: string,
      public client_payload: string,
      public middleware_response: string,
      public role_function: string,
      public company: string,
      public ciid: string
  ){}
}
