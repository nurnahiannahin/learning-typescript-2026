// Exclude<U, V> -> remove from U those member assignable to V


type EventType1 = "click" | "submit" | "keydown";
type EventType2 = Exclude<EventType1, "keydown">


function handleEvent1(e: EventType2) {
    console.log(e)
}
// handleEvent1('keydown')

type ActionsN1 = "create" | "update" | "read"
type ActionsN2 = Extract<ActionsN1, "create" | "read"> 



// Permission System

type AllPermissions = "view" | "edit" | "delete" | "publish";
type BasicUserPermission = Exclude<AllPermissions, "delete" | "publish">

const myPrivilage: BasicUserPermission = "view"


// API Response Handling

type FileTypes = 
    | {kind: "pdf"; size: number}
    | {kind: "jpg"; resolution: string}
    | {kind: "png"; resolution: string}
    | {kind: "txt"; chars: number}


type ImageFiles = Extract<FileTypes, {kind: "jpg" | "png"}>

const myImg: ImageFiles = {kind: "png", resolution: "1920x1080"}