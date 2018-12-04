export const type = {
    SWITCH_MENU : 'SWITCH_MENU',
    TOGGLE_ALERT: 'TOGGLE_ALERT',
    CHANGE_ALERT: 'CHANGE_ALERT',
    CHANGE_HEADER: 'CHANGE_HEADER',
    CHANGE_PROFILE: 'CHANGE_PROFILE',
    CHANGE_TOP: 'CHANGE_TOP'
}

// 菜单点击切换，修改面包屑名称
export function switchMenu(menuName) {
    return {
        type:type.SWITCH_MENU,
        menuName
    }
}

export function toggleAlert({text, category, status}) {
    return {
        type:type.TOGGLE_ALERT,
        text,
        category,
        status
    }
}