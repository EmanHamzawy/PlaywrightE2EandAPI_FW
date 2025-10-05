import {FlutterEnableAccessibility} from "../../helpers/FlutterEnableAccessibility";
import {PageBase} from "./PageBase";

export class AngularFlutterPage extends PageBase {

    readonly glassPane = "flt-glass-pane";
    readonly glassPaneLoc = this.page.locator("flt-glass-pane");
    readonly placeholder = "flt-semantics-placeholder";
    incrementBtn = this.page.locator('[id="flt-semantic-node-8"]');
    readonly count = this.page.locator('[id="flt-semantic-node-5"]');

    readonly flutter =  new FlutterEnableAccessibility(this.page, this.glassPane, this.placeholder);

    async goToPage(link: string) {
        this.page.goto(link);
    }
    async enableAccessibility(){
        this.flutter.enableAccessibility();
    }
    async clickOnIncrement(){
        await this.incrementBtn.click();
    }





}