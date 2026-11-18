import type {
    Application as JxaApplication,
    ObjectSpecifier as JxaObjectSpecifier,
    Automation as JxaAutomation
} from "@v1ctorio/jxa-types";

declare global {
    const Application: typeof JxaApplication;
    const Automation: typeof JxaAutomation;
    const ObjectSpecifier: typeof JxaObjectSpecifier;

    function Path(name: string): object;

    /**
     * Pause for a fixed amount of time
     * @param delay the number of seconds to delay (default is 0)
     *
     */
    function delay(delay?: number): void;

    const ObjC: any;
    const $: any;
}
