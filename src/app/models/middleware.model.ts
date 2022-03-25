export class Middleware{
    constructor(
        public clientId: string,
        public sent: string,
        public openTicked: string,
        public source_id: string,
        public itsm_response: string,
        public description:string
    ){}
}
