import { EventData } from "data/observable";
import { Page } from "ui/page";
import { HelloWorldModel } from "./main-view-model";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

var firebase = require("nativescript-plugin-firebase");

firebase.init({
persist: true // Allow disk persistence. Default false.
}).then(
    function (instance) {
    console.log("firebase.init done");
    },
    function (error) {
    console.log("firebase.init error: " + error);
    }
);