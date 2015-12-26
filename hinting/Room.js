var Room = function () {};

Room.prototype = {
    /**
     * @type Structure
     */
    controller: null,

    /**
     * @type number
     */
    energyAvailable: 0,

    /**
     * @type number
     */
    energyCapacityAvailable: 0,

    /**
     * @type object
     */
    memory: {},

    /**
     * @type {MODE_SIMULATION|MODE_WORLD}
     */
    mode: null,

    /**
     * @type string
     */
    name: '',

    /**
     * @type Structure
     */
    storage: null,

    /**
     * @type {{score: number, timeToWave: number, wave: Number}}
     */
    survivalInfo: null,

    /**
     * @param {object|RoomPosition} pos
     * @param {STRUCTURE_EXTENSION|STRUCTURE_RAMPART|STRUCTURE_ROAD|STRUCTURE_SPAWN|STRUCTURE_LINK|STRUCTURE_WALL|STRUCTURE_STORAGE|STRUCTURE_TOWER|STRUCTURE_OBSERVER|STRUCTURE_POWER_BANK|STRUCTURE_POWER_SPAWN} structureType
     * @return {OK|ERR_INVALID_TARGET|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createConstructionSite: function (pos, structureType) {},

    /**
     * @param {object|RoomPosition} pos
     * @param {string} [name]
     * @param {COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN} [color]
     * @return string|ERR_NAME_EXISTS|ERR_INVALID_ARGS
     */
    createFlag: function (pos, name, color) {},

    /**
     * @param {FIND_CREEPS|FIND_MY_CREEPS|FIND_HOSTILE_CREEPS|FIND_MY_SPAWNS|FIND_HOSTILE_SPAWNS|FIND_SOURCES|FIND_SOURCES_ACTIVE|FIND_DROPPED_ENERGY|FIND_STRUCTURES|FIND_MY_STRUCTURES|FIND_HOSTILE_STRUCTURES|FIND_FLAGS|FIND_CONSTRUCTION_SITES|FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|FIND_EXIT} type
     * @param {{filter: object|function|string}} [opts]
     * @return Array
     */
    find: function (type, opts) {},

    /**
     * @param {string|Room} room
     * @return {FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|ERR_NO_PATH|ERR_INVALID_ARGS}
     */
    findExitTo: function (room) {},

    /**
     * @param {RoomPosition} fromPos
     * @param {RoomPosition} toPos
     * @param {{ignoreCreeps: boolean, ignoreDestructibleStructures: boolean, ignore: Array, avoid: Array, maxOps: number, heuristicWeight: number, serialize: boolean}} [opts]
     * @return {Array.<{x: number, y: number, dx: number, dy: number, direction: TOP|TOP_RIGHT|RIGHT|BOTTOM_RIGHT|BOTTOM|BOTTOM_LEFT|LEFT|TOP_LEFT}>}
     */
    findPath: function (fromPos, toPos, opts) {},

    /**
     * @param {number} x
     * @param {number} y
     * @return RoomPosition
     */
    getPositionAt: function (x, y) {},

    /**
     * @param {object|RoomPosition} target
     * @return Array
     */
    lookAt: function (target) {},

    /**
     * @param {number} top
     * @param {number} left
     * @param {number} bottom
     * @param {number} right
     * @return Array
     */
    lookAtArea: function (top, left, bottom, right) {},

    /**
     * @param {string} type
     * @param {object|RoomPosition} target
     * @return object
     */
    lookForAt: function (type, target) {},

    /**
     * @param {string} type
     * @param {number} top
     * @param {number} left
     * @param {number} bottom
     * @param {number} right
     * @return Array
     */
    lookForAtArea: function (type, top, left, bottom, right) {}
};


/**
 * @param {Array.<{x: number, y: number, dx: number, dy: number, direction: TOP|TOP_RIGHT|RIGHT|BOTTOM_RIGHT|BOTTOM|BOTTOM_LEFT|LEFT|TOP_LEFT}>} path
 * @return string
 */
Room.serializePath = function(path) {};

/**
 * @param {string} path
 * @return {Array.<{x: number, y: number, dx: number, dy: number, direction: TOP|TOP_RIGHT|RIGHT|BOTTOM_RIGHT|BOTTOM|BOTTOM_LEFT|LEFT|TOP_LEFT}>}
 */
Room.deserializePath = function(path) {};
