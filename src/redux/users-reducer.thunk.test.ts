import { ResponseType, ResultCodesEnum, usersAPI } from "../api/api"
import { actions, follow, unFollow } from "./users-reducer"

jest.mock("../api/api")
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: ResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

describe('thunks', () => {
    test("success follow thunk", async () => {
        userAPIMock.follow.mockReturnValue(Promise.resolve(result)) // if follow will be called mock return result
        const thunk = follow(1)
        const dispatchMock = jest.fn()
        const getStateMock = jest.fn()
        
        await thunk(dispatchMock, getStateMock, {})
    
        expect(dispatchMock).toBeCalledTimes(3)
        // calls with somethings obj
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowingInProgress(true, 1))
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.acceptFollow(1))
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowingInProgress(false, 1))
    }) 
    
    test("success unFollow thunk", async () => {
        userAPIMock.unFollow.mockReturnValue(Promise.resolve(result))
        const thunk = unFollow(1)
        const dispatchMock = jest.fn()
        const getStateMock = jest.fn()
        
        await thunk(dispatchMock, getStateMock, {})
    
        expect(dispatchMock).toBeCalledTimes(3)
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setFollowingInProgress(true, 1))
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.acceptUnFollow(1))
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setFollowingInProgress(false, 1))
    }) 
})

