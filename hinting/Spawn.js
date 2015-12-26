var Spawn = function () {};

Spawn.prototype = {
    /**
     * @type number
     */
    energy: 0,

    /**
     * @type number
     */
    energyCapacity: 0,

    /**
     * @type number
     */
    hits: 0,

    /**
     * @type number
     */
    hitsMax: 0,

    /**
     * @type string
     */
    id: '',

    /**
     * @type object
     */
    memory: {},

    /**
     * @type boolean
     */
    my: false,

    /**
     * @type string
     */
    name: '',

    /**
     * @type {{username: string}}
     */
    owner: {},

    /**
     * @type RoomPosition
     */
    pos: null,

    /**
     * @type Room
     */
    room: null,

    /**
     * @type STRUCTURE_SPAWN
     */
    structureType: STRUCTURE_SPAWN,

    /**
     * @type {{name: string, needTime: number, remainingTime: number}}|null
     */
    spawning: null,

    /**
     * @param {Array<WORK|MOVE|CARRY|ATTACK|RANGED_ATTACK|HEAL|TOUGH>} body
     * @param {string} name
     * @return {OK|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
     */
    canCreateCreep: function (body, name) {},

    /**
     * @param {Array<WORK|MOVE|CARRY|ATTACK|RANGED_ATTACK|HEAL|TOUGH>} body
     * @param {string} name
     * @param {object} memory
     * @return {string|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
     */
    createCreep: function (body, name, memory) {},

    /**
     * @return {OK|ERR_NOT_OWNER}
     */
    destroy: function() {},

    /**
     * @param {boolean} enabled
     * @return {OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function(enabled) {},

    /**
     * @param {Creep} target
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    renewCreep: function(target) {},

    /**
     * @param {Creep} target
     * @param {number} [amount]
     * @return {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function (target, amount) {}
};
