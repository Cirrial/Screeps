var Game = function () {};

Game.prototype = {
    /**
     * @type number
     */
    cpuLimit: 0,

    /**
     * @type {object.<string, Creep>}
     */
    creeps: {},

    /**
     * @type {object.<string, Flag>}
     */
    flags: {},

    /**
     * @type {{level: number, progress: number, progressTotal: number}}
     */
    gcl: {},

    /**
     * @type Map
     */
    map: null,

    /**
     * @type {object.<string, Room>}
     */
    rooms: {},

    /**
     * @type {object.<string, Spawn>}
     */
    spawns: {},

    /**
     * @type {object.<string, Structure>}
     */
    structures: {},

    /**
     * @type number
     */
    time: 0,

    /**
     * @param {string} id
     * @return object|null
     */
    getObjectById: function (id) {},

    /**
     * @return number
     */
    getUsedCpu: function () {},

    /**
     * @param {string} message
     * @param {number} [groupInterval]
     */
    notify: function (message, groupInterval) {}
};
