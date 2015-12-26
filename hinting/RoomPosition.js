/**
 * @param {number} x
 * @param {number} y
 * @param {string} roomName
 * @constructor
 */
var RoomPosition = function (x, y, roomName) {};

RoomPosition.prototype = {
    /**
     * @type string
     */
    roomName: '',

    /**
     * @type number
     */
    x: 0,

    /**
     * @type number
     */
    y: 0,

    /**
     * @param {STRUCTURE_EXTENSION|STRUCTURE_RAMPART|STRUCTURE_ROAD|STRUCTURE_SPAWN|STRUCTURE_LINK|STRUCTURE_WALL|STRUCTURE_STORAGE|STRUCTURE_TOWER|STRUCTURE_OBSERVER|STRUCTURE_POWER_BANK|STRUCTURE_POWER_SPAWN} structureType
     * @return {OK|ERR_INVALID_TARGET|ERR_FULL|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createConstructionSite: function (structureType) {},

    /**
     * @param {string} [name]
     * @param {COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN} [color]
     * @return string|ERR_NAME_EXISTS|ERR_INVALID_ARGS
     */
    createFlag: function (name, color) {},

    /**
     * @param {Array|FIND_CREEPS|FIND_MY_CREEPS|FIND_HOSTILE_CREEPS|FIND_MY_SPAWNS|FIND_HOSTILE_SPAWNS|FIND_SOURCES|FIND_SOURCES_ACTIVE|FIND_DROPPED_ENERGY|FIND_STRUCTURES|FIND_MY_STRUCTURES|FIND_HOSTILE_STRUCTURES|FIND_FLAGS|FIND_CONSTRUCTION_SITES|FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|FIND_EXIT} type
     * @param {{filter: object|function|string, algorithm: string}} [opts]
     * @return object
     */
    findClosestByPath: function (type, opts) {},

    /**
     * @param {Array|FIND_CREEPS|FIND_MY_CREEPS|FIND_HOSTILE_CREEPS|FIND_MY_SPAWNS|FIND_HOSTILE_SPAWNS|FIND_SOURCES|FIND_SOURCES_ACTIVE|FIND_DROPPED_ENERGY|FIND_STRUCTURES|FIND_MY_STRUCTURES|FIND_HOSTILE_STRUCTURES|FIND_FLAGS|FIND_CONSTRUCTION_SITES|FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|FIND_EXIT} type
     * @param {{filter: object|function|string}} [opts]
     * @return object
     */
    findClosestByRange: function (type, opts) {},

    /**
     * @param {Array|FIND_CREEPS|FIND_MY_CREEPS|FIND_HOSTILE_CREEPS|FIND_MY_SPAWNS|FIND_HOSTILE_SPAWNS|FIND_SOURCES|FIND_SOURCES_ACTIVE|FIND_DROPPED_ENERGY|FIND_STRUCTURES|FIND_MY_STRUCTURES|FIND_HOSTILE_STRUCTURES|FIND_FLAGS|FIND_CONSTRUCTION_SITES|FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|FIND_EXIT} type
     * @param {number} range
     * @param {{filter: object|function|string}} [opts]
     * @return Array
     */
    findInRange: function (type, range, opts) {},

    /**
     * @param {object|RoomPosition} target
     * @param {{ignoreCreeps: boolean, ignoreDestructibleStructures: boolean, ignore: Array, avoid: Array, maxOps: number, heuristicWeight: number, serialize: boolean}} [opts]
     * @return {Array.<{x: number, y: number, dx: number, dy: number, direction: TOP|TOP_RIGHT|RIGHT|BOTTOM_RIGHT|BOTTOM|BOTTOM_LEFT|LEFT|TOP_LEFT}>}
     */
    findPathTo: function (target, opts) {},

    /**
     * @param {object|RoomPosition} target
     * @return {TOP|TOP_RIGHT|RIGHT|BOTTOM_RIGHT|BOTTOM|BOTTOM_LEFT|LEFT|TOP_LEFT}
     */
    getDirectionTo: function (target) {},

    /**
     * @param {object|RoomPosition} target
     * @return number
     */
    getRangeTo: function (target) {},

    /**
     * @param {RoomPosition} toPos
     * @param {number} range
     * @return boolean
     */
    inRangeTo: function (toPos, range) {},

    /**
     * @param {object|RoomPosition} target
     * @return boolean
     */
    isEqualTo: function (target) {},

    /**
     * @param {object|RoomPosition} target
     * @return boolean
     */
    isNearTo: function (target) {},

    /**
     * @return Array
     */
    look: function() {},

    /**
     * @param {string} type
     * @return Array
     */
    lookFor: function(type) {}
};
