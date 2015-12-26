var Map = function () {};

Map.prototype = {

    /**
     * @param {string} roomName
     * @return {object.<string, string>|null}
     */
    describeExits: function(roomName) {},

    /**
     * @param {string|Room} fromRoom
     * @param {string|Room} toRoom
     * @return {FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|ERR_NO_PATH|ERR_INVALID_ARGS}
     */
    findExit: function (fromRoom, toRoom) {},

    /**
     * @param {string|Room} fromRoom
     * @param {string|Room} toRoom
     * @return {Array.<{exit: FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT, room: string}>|ERR_NO_PATH}
     */
    findRoute: function (fromRoom, toRoom) {},

    /**
     * @param {string} roomName
     * @return boolean
     */
    isRoomProtected: function(roomName) {}
};
