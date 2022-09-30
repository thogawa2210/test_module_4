declare class Controller {
    showListPage(req: any, res: any): Promise<void>;
    showCreatePage(req: any, res: any): Promise<void>;
    showDetailPage(req: any, res: any): Promise<void>;
    create(req: any, res: any): Promise<void>;
    showUpdate(req: any, res: any): Promise<void>;
    update(req: any, res: any): Promise<void>;
    delete(req: any, res: any): Promise<void>;
}
declare const controller: Controller;
export default controller;
