var Resource = function () {};

Resource.prototype = {

    /**
     * @type number
     */
    amount: 0,

    /**
     * @type string
     */
    id: '',

    /**
     * @type RoomPosition
     */
    pos: null,

    /**
     * @type {RESOURCE_ENERGY|RESOURCE_POWER}
     */
    resourceType: null,

    /**
     * @type Room
     */
    room: null
};
