import {App, Store} from "./store";
import {Widget, WidgetType} from "../types/Component";
import {Style} from "../types/Style";


// const printLog: Action.Print = {
//     type: ActionType.Print,
//     value: 'hi😊 VFT2J'
// };


const titleBackgroundWidth = 510,
      titleBackgroundHeight = 70;

const titleBackground: Widget.Image= {
    type: WidgetType.image,
    width: titleBackgroundWidth,
    height: titleBackgroundHeight,
    src: Store.titleBackground,
    y: 0,
    x: App.width / 2 - titleBackgroundWidth / 2,
};

const contentImgBorderWidth = 293,
      contentImgBorderHeight = 221;
const contentImgBorder: Widget.Image = {
    type: WidgetType.image,
    width: contentImgBorderWidth,
    height: contentImgBorderHeight,
    src: Store.contentImgBorder,
    y: App.height / 2 - contentImgBorderHeight /2,
    x: App.width / 2 - contentImgBorderWidth / 2
};



const contentQuestionImgWidth = 281,
      contentQuestionImgHeight = 208;
const contentQuestionImg: Widget.Image = {
    type: WidgetType.image,
    width: contentQuestionImgWidth,
    height: contentQuestionImgHeight,
    src: Store.contentQuestionImg,
    y: App.height / 2 - contentQuestionImgHeight / 2,
    x: App.width / 2 - contentQuestionImgWidth / 2
};

const contentQuestionImgWithBorderImg: Widget.Custom = {
    type: WidgetType.custom,
    children: [
        {
            id: Store.contentImgBorder,
            libId: Store.contentImgBorder
        },
        {
            id: Store.contentQuestionImg,
            libId: Store.contentQuestionImg
        }
    ],
};


const choiceImgWidth = 321,
      choiceImgHeight = 70;

const choiceImgStaticRight: Widget.Image = {
    type: WidgetType.image,
    width: choiceImgWidth,
    height: choiceImgHeight,
    src: Store.choiceButtonRight
};

const choiceImgStaticWrong: Widget.Image = {
    type: WidgetType.image,
    width: choiceImgWidth,
    height: choiceImgHeight,
    src: Store.choiceButtonWrong
}

const choiceAnswerContainer: Widget.Custom = {
    type: WidgetType.custom,
    children: [
        {
            id: Store.choiceButtonRight,
            libId: Store.choiceButtonRight
        },
        {
            id: Store.choiceButtonWrong,
            libId: Store.choiceButtonWrong
        }
    ]
}


const root: Widget.Custom = {
    type: WidgetType.custom,
    children: [
        {
            id: Store.titleBackground,
            libId: Store.titleBackground
        },
        {
            id: Store.contentQuestionImgWithBorderImg,
            libId: Store.contentQuestionImgWithBorderImg,
            y: -10
        },
        {
            id: Store.choiceAnswerContainer,
            libId: Store.choiceAnswerContainer,
            x: 0,
            y: 50,
            style: {
                display: Style.Display.grid
            }
        }
    ],
    actionList: `
        @this = {
            print('hello, vfx.');
        }
    `
};


export default {
    [Store.root]: root,
    [Store.titleBackground]: titleBackground,
    [Store.contentImgBorder]: contentImgBorder,
    [Store.contentQuestionImg]: contentQuestionImg,
    [Store.contentQuestionImgWithBorderImg]: contentQuestionImgWithBorderImg,
    [Store.choiceButtonRight]: choiceImgStaticRight,
    [Store.choiceButtonWrong]: choiceImgStaticWrong,
    [Store.choiceAnswerContainer]: choiceAnswerContainer,
}
