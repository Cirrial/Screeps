var Flag = function () {};

Flag.prototype = {
    /**
     * @type string
     */
    id: '',

    /**
     * @type {COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN}
     */
    color: null,

    /**
     * @type object
     */
    memory: null,

    /**
     * @type string
     */
    name: '',

    /**
     * @type RoomPosition
     */
    pos: null,

    /**
     * @type Room
     */
    room: null,

    /**
     * @return {OK}
     */
    remove: function () {},

    /**
     * @param {COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN} color
     * @return {OK|ERR_INVALID_ARGS}
     */
    setColor: function(color) {},

    /**
     * @param {number|object} firstArg
     * @param {number} [secondArg]
     * @return {OK|ERR_INVALID_TARGET}
     */
    setPosition: function(firstArg, secondArg) {}
};
