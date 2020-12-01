


export const getUsers = (state) => {
    return state.usersPage.users
};
export const totalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};
export const Page = (state) => {
    return state.usersPage.pageSize
};
export const currentPage = (state) => {
    return state.usersPage.currentPage
};
export const isFetching = (state) => {
    return state.usersPage.isFetching
};

export const followingInProgress = (state) => {
    return state.usersPage.followingInProgress
};
