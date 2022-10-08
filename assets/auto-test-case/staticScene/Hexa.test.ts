// @ts-ignore
import { captureOneImage, waitForNextFrame, runScene, testCase, testClass } from 'db://automation-framework/runtime/test-framework.mjs';

@runScene('Hexa')
@testClass('Hexa')
export class Hexa {
    @testCase
    async startPlay() {
        await waitForNextFrame();
        await captureOneImage();
    }
}