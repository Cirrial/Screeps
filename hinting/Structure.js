var Structure = function () {};

Structure.prototype = {
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
     * @type boolean
     */
    my: false,

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
     * @type {STRUCTURE_EXTENSION|STRUCTURE_RAMPART|STRUCTURE_ROAD|STRUCTURE_SPAWN|STRUCTURE_LINK|STRUCTURE_WALL|STRUCTURE_KEEPER_LAIR|STRUCTURE_CONTROLLER|STRUCTURE_STORAGE|STRUCTURE_TOWER|STRUCTURE_OBSERVER|STRUCTURE_POWER_BANK|STRUCTURE_POWER_SPAWN}
     */
    structureType: null,

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
    cooldown: 0,

    /**
     * @type number
     */
    ticksToSpawn: 0, // keeper lair

    /**
     * @type number
     */
    level: 0,

    /**
     * @type number
     */
    progress: 0,

    /**
     * @type number
     */
    progressTotal: 0,

    /**
     * @type number
     */
    ticksToDecay: 0,

    /**
     * @type number
     */
    ticksToLive: 0, // automatic newbie walls only

    // Controller
    /**
     * {{username: string, ticksToEnd: number}}
     */
    reservation: null,

    /**
     * @type number
     */
    ticksToDowngrade: 0,

    /**
     * @type number
     */
    power: 0,

    /**
     * @type number
     */
    powerCapacity: 0,

    // Storage

    /**
     * @type {{energy: number, power: number|undefined}}
     */
    store: {},

    /**
     * @type number
     */
    storeCapacity: 0,

    /**
     * @return {OK|ERR_NOT_OWNER}
     */
    destroy: function() {},

    /**
     * @param {boolean} enabled
     * @return {OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function(enabled) {},

    // Controller
    /**
     * @return {OK|ERR_NOT_OWNER}
     */
    unclaim: function() {},

    // Observer

    /**
     * @param {string} roomName
     * @return {OK|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    observeRoom: function(roomName) {},

    // Link
    // Extension
    // Power Spawn
    /**
     * @param {Creep|Structure} target
     * @param {number} [amount]
     * @return {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED}
     */
    transferEnergy: function (target, amount) {},

    /**
     * @param {Creep} target
     * @param {RESOURCE_ENERGY|RESOURCE_POWER} resourceType
     * @param {number} [amount]
     * @return {OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function (target, resourceType, amount) {},

    // Power Spawn

    /**
     * @param {string} name
     */
    createPowerCreep: function(name) {},

    /**
     * @return {OK|ERR_NOT_ENOUGH_RESOURCES|ERR_RCL_NOT_ENOUGH}
     */
    processPower: function() {},

    // Tower

    /**
     * @param {Creep} target
     * @return {OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    attack: function(target) {},

    /**
     * @param {Creep} target
     * @return {OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    heal: function(target) {},

    /**
     * @param {Spawn|Structure} target
     * @return {OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    repair: function(target) {}
};
