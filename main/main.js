var nameAppendices = [
    'Alpha',
    'Bravo',
    'Charlie',
    'Delta',
    'Echo',
    'Foxtrot',
    'Golf',
    'Hotel',
    'India',
    'Juliett',
    'Kilo',
    'Lima',
    'Mike',
    'November',
    'Oscar',
    'Papa',
    'Quebec',
    'Romeo',
    'Sierra',
    'Tango',
    'Uniform',
    'Victor',
    'Whiskey',
    'Xray',
    'Yankee',
    'Zulu'
];

function generateName(caste, num) {
    var suffix = nameAppendices[num % nameAppendices.length];
    while(num > nameAppendices.length) {
        num -= nameAppendices.length;
        suffix = suffix + "-" + nameAppendices[num % nameAppendices.length];
    }
    return bodyTypes[caste].name + " " + suffix;
}

//function orderWeighting(creep, jobType) {
//    return creep.memory.jobs.length - creep.memory.jobs.indexOf(jobType);
//}

var jobs = {};

jobs.mine = {
    listAll: function() {
        var jobs = [];
        for(var name in Game.rooms) {
            if(Game.rooms.hasOwnProperty(name)) {
                var room = Game.rooms[name];
                var sources = room.find(FIND_SOURCES_ACTIVE);
                for(var sourceIndex in sources) {
                    if(sources.hasOwnProperty(sourceIndex)) {
                        var source = sources[sourceIndex];
                        jobs.push(['mine-' + source.id, source.id, 'mine', this.priority(room, source)]);
                    }
                }
            }
        }
        return jobs;
    },
    run: function(creep, target) {
        if(creep.pos.isNearTo(target)) {
            creep.harvest(target);
        } else {
            creep.moveTo(target);
        }
    },
    finished: function(creep, target) {
        return false;
    },
    priority: function(room, target) {
        var priority = 0;
        var name;

        for(name in Game.spawns) {
            if(Game.spawns.hasOwnProperty(name)) {
                var spawn = Game.spawns[name];
                priority = (50 - spawn.pos.getRangeTo(target)) * target.energy;
            }
        }

        // set priority to 0 if there's already a creep next to it
        for(name in Game.creeps) {
            if(Game.creeps.hasOwnProperty(name)) {
                var creep = Game.creeps[name];
                if(creep.pos.isNearTo(target)) {
                    priority = 0;
                }
            }
        }

        // set priority to 0 if there's a source keeper nearby (15 tiles)
        var sourceKeepers = room.find(FIND_HOSTILE_CREEPS, {
            filter: function(i) {
                return i.owner.username != 'Source Keeper';
            }
        });
        for(var index in sourceKeepers) {
            if(sourceKeepers.hasOwnProperty(index)) {
                var sourceKeeper = sourceKeeper[index];
                if(sourceKeeper.pos.inRangeTo(target.pos, 15)) {
                    priority = 0;
                }
            }
        }

        return priority * 10;
    }
};

jobs.collect = {
    listAll: function() {
        var jobs = [];
        for(var name in Game.rooms) {
            if(Game.rooms.hasOwnProperty(name)) {
                var room = Game.rooms[name];
                if(room.energyCapacityAvailable - room.energyAvailable > 0) {
                    var resources = room.find(FIND_DROPPED_ENERGY);
                    for(var resourceIndex in resources) {
                        if(resources.hasOwnProperty(resourceIndex)) {
                            var resource = resources[resourceIndex];
                            jobs.push(['collect-' + resource.id, resource.id, 'collect', this.priority(resource)]);
                        }
                    }
                }
            }
        }
        return jobs;
    },
    run: function(creep, target) {
        if(target !== null) {
            var spawner;
            if(creep.carry.energy == 0) {
                // collect
                if(creep.pos.isNearTo(target)) {
                    creep.pickup(target);
                    // change target to spawner
                    spawner = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
                    creep.memory.activeJob.target = spawner.id;
                } else {
                    creep.moveTo(target);
                }
            } else {
                // dropoff
                spawner = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
                if(creep.pos.isNearTo(spawner)) {
                    creep.transfer(spawner, RESOURCE_ENERGY);
                    creep.memory.activeJob.target = null;
                } else {
                    creep.moveTo(spawner);
                }
            }
        }
    },
    finished: function(creep, target) {
        return !(target === null);
    },
    priority: function(target) {
        var priority = 0;

        for(var name in Game.spawns) {
            if(Game.spawns.hasOwnProperty(name)) {
                var spawn = Game.spawns[name];
                priority = (50 - spawn.pos.getRangeTo(target)) * target.amount;
            }
        }

        return priority * 10;
    }
};

jobs.heal = {
    listAll: function() {
        var jobs = [];
        for(var name in Game.rooms) {
            if(Game.rooms.hasOwnProperty(name)) {
                var room = Game.rooms[name];
                var damagedCreeps = room.find(FIND_MY_CREEPS, {
                    filter: function(target) {
                        return target.hits < target.hitsMax;
                    }
                });
                for(var index in damagedCreeps) {
                    if(damagedCreeps.hasOwnProperty(index)) {
                        var creep = damagedCreeps[index];
                        jobs.push(['heal-' + creep.id, creep.id, 'heal', this.priority(creep)])
                    }
                }
            }
        }
        return jobs;
    },
    run: function(creep, target) {
        if(creep.pos.isNearTo(target)) {
            creep.heal(target);
        } else {
            creep.moveTo(target);
            if(creep.pos.inRangeTo(target.pos, 3)) {
                creep.rangedHeal(target);
            }
        }
    },
    finished: function(creep, target) {
        return target.hits >= target.hitsMax;
    },
    priority: function(target) {
        return (target.hitsMax - target.hits) * 10;
    }
};

jobs.repair = {
    listAll: function() {
        var jobs = [];
        for(var name in Game.rooms) {
            if(Game.rooms.hasOwnProperty(name)) {
                var room = Game.rooms[name];
                var damagedStructures = room.find(FIND_MY_STRUCTURES, {
                    filter: function(target) {
                        return target.hits < target.hitsMax;
                    }
                });
                damagedStructures.push(room.find(FIND_MY_SPAWNS, {
                    filter: function(target) {
                        return target.hits < target.hitsMax;
                    }
                }));
                for(var index in damagedStructures) {
                    if(damagedStructures.hasOwnProperty(index)) {
                        var structure = damagedStructures[index];
                        jobs.push(['repair-' + structure.id, structure.id, 'repair', this.priority(structure)])
                    }
                }
            }
        }
        return jobs;
    },
    run: function(creep, target) {
        var spawner = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
        if(spawner && creep.carry.energy == 0) {
            if(creep.pos.isNearTo(spawner)) {
                spawner.transferEnergy(creep);
            } else {
                creep.moveTo(spawner);
            }
        } else {
            if(creep.pos.isNearTo(target)) {
                creep.repair(target);
            } else {
                creep.moveTo(target);
            }
        }
    },
    finished: function(creep, target) {
        return target.hits >= target.hitsMax;
    },
    priority: function(target) {
        return (target.hitsMax - target.hits) * 100;
    }
};

jobs.build = {
    listAll: function() {
        var jobs = [];
        for(var name in Game.rooms) {
            if(Game.rooms.hasOwnProperty(name)) {
                var room = Game.rooms[name];
                var sites = room.find(FIND_CONSTRUCTION_SITES);
                for(var index in sites) {
                    if(sites.hasOwnProperty(index)) {
                        var site = sites[index];
                        jobs.push(['build-' + site.id, site.id, 'build', this.priority(site)]);
                    }
                }
            }
        }
        return jobs;
    },
    run: function(creep, target) {
        var spawner = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
        if(spawner && creep.carry.energy == 0) {
            if(creep.pos.isNearTo(spawner)) {
                spawner.transferEnergy(creep);
            } else {
                creep.moveTo(spawner);
            }
        } else {
            if(creep.pos.isNearTo(target)) {
                creep.build(target);
            } else {
                creep.moveTo(target);
            }
        }
    },
    finished: function(creep, target) {
        return target.progress >= target.progressTotal;
    },
    priority: function(target) {
        return (target.progressTotal - target.progress) * 10;
    }
};

jobs.attack = {
    listAll: function() {
        var jobs = [];
        var hostiles = [];
        for(var name in Game.rooms) {
            if(Game.rooms.hasOwnProperty(name)) {
                var room = Game.rooms[name];
                hostiles.push(room.find(FIND_HOSTILE_CREEPS, {
                    filter: function(i) {
                        return i.owner.username != 'Source Keeper';
                    }
                }));
            }
        }

        for(var hostileIndex in hostiles) {
            if(hostiles.hasOwnProperty(hostileIndex)) {
                var hostile = hostiles[hostileIndex];
                jobs.push(['attack-' + hostile.id, hostile.id, 'attack', this.priority(hostile)]);
            }
        }
        return jobs;
    },
    run: function(creep, target) {
        if(creep.pos.isNearTo(target) && creep.getActiveBodyParts(ATTACK) > 0) {
            creep.attack(target);
        } else {
            creep.moveTo(target);
            if(creep.pos.inRangeTo(target.pos, 3) && creep.getActiveBodyParts(RANGED_ATTACK) > 0) {
                creep.rangedAttack(target);
            }
        }
    },
    finished: function(creep, target) {
        return target.hits <= 0;
    },
    priority: function(target) {
        var enemyHealParts = target.getActiveBodyParts(HEAL);
        var enemyRangedAttackParts = target.getActiveBodyParts(RANGED_ATTACK);
        var enemyAttackParts = target.getActiveBodyParts(ATTACK);
        return (enemyHealParts * 3 + enemyRangedAttackParts * 2 + enemyAttackParts) * 100 + target.hits;
    }
};

jobs.guard = {
    listAll: function() {
        var jobs = [];
        for(var name in Game.flags) {
            if(Game.flags.hasOwnProperty(name)) {
                var flag = Game.flags[name];
                for(var creepName in Game.creeps) {
                    if(Game.creeps.hasOwnProperty(creepName)) {
                        var creep = Game.creeps[creepName];
                        if(creep.pos.isNearTo(flag)) {
                            jobs.push(['guard-' + flag.id, flag.id, 'guard', this.priority(flag)])
                        }
                    }
                }
            }
        }
        return jobs;
    },
    run: function(creep, target) {
        creep.moveTo(target);
    },
    finished: function(creep, target) {
        return creep.pos.isNearTo(target);
    },
    priority: function(target) {
        var nearCreeps = 0;
        for(var name in Game.creeps) {
            if(Game.creeps.hasOwnProperty(name)) {
                var creep = Game.creeps[name];
                if(creep.pos.isNearTo(target)) {
                    nearCreeps++;
                }
            }
        }
        return Math.pow(0.9, nearCreeps) * 100;
    }
};

jobs.control = {
    listAll: function() {
        var jobs = [];
        for(var name in Game.rooms) {
            if(Game.rooms.hasOwnProperty(name)) {
                var room = Game.rooms[name];
                jobs.push(['control-' + room.controller.id, room.controller.id, 'control', this.priority(room.controller)]);
            }
        }
        return jobs;
    },
    run: function(creep, target) {
        var spawner = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
        if(spawner && creep.carry.energy == 0) {
            if(creep.pos.isNearTo(spawner)) {
                spawner.transferEnergy(creep);
            } else {
                creep.moveTo(spawner);
            }
        } else {
            if(creep.pos.isNearTo(target)) {
                creep.upgradeController(target);
            } else {
                creep.moveTo(target);
            }
        }
    },
    finished: function(creep, target) {
        return target.progress >= target.progressTotal;
    },
    priority: function(target) {
        return ((target.progressTotal - target.progress) * 10) + Math.max(0, (20000 - (target.ticksToDowngrade) * 0.01));
    }
};


var bodyTypes = {
    miner: {
        body: [WORK, WORK, MOVE],
        cost: 250,
        name: 'Siphon',
        jobs: ['mine']
    },
    carrier: {
        body: [CARRY, MOVE],
        cost: 150,
        name: 'Messenger',
        jobs: ['collect']
    },
    healer: {
        body: [HEAL, MOVE],
        cost: 300,
        name: 'Calmer',
        jobs: ['heal']
    },
    fixer: {
        body: [WORK, CARRY, MOVE],
        cost: 200,
        name: 'Pumper',
        jobs: ['repair', 'build', 'control']
    },
    scout: {
        body: [TOUGH, ATTACK, MOVE, MOVE],
        cost: 190,
        name: 'Blader',
        jobs: ['attack', 'guard']
    }
};


module.exports.loop = function() {

    var creep, creepName, jobData;

    // determine the jobs that need to be done
    // FORMAT:
    // [job id, target id, job type, priority]
    var currentJobs = [];
    for(var jobName in jobs) {
        if(jobs.hasOwnProperty(jobName)) {
            jobData = jobs[jobName];
            currentJobs.push(jobData.listAll.call(jobData));
        }
    }

    // sort them by priority
    currentJobs.sort(function(a, b) {
        return a[3] - b[3];
    });


    // for each creep:
    // determine what job the creep is doing
    // determine if they've finished, to clear the job
    // otherwise run it
    // FORMAT:
    // {id, type, target}
    var activeJobs = {};
    var idleCreepsList = [];
    var numCreeps = 0;
    for(creepName in Game.creeps) {
        if(Game.creeps.hasOwnProperty(creepName)) {
            creep = Game.creeps[creepName];
            var creepJob = creep.memory.activeJob;
            if(creepJob) {
                if(jobs[creepJob.type].finished(creep, Game.getObjectById(creepJob.target))) {
                    creep.say("Finished " + creepJob.type + ".");
                    creep.memory.activeJob = null;
                    idleCreepsList.push(creepName);
                } else {
                    activeJobs[creepJob.id] = creepJob;
                    jobs[creepJob.type].run(creep, Game.getObjectById(creepJob.target));
                }
            } else {
                idleCreepsList.push(creepName);
            }
        }
        numCreeps++; // might as well count here
    }

    // for each job:
    // check if the job isn't being done already and is of any value
    // determine who can do the job or if a new unit needs to be made to fulfil it
    // if the unit is not busy and can do the job, make them do it
    // if no units can do the job:
    // if there's a free spawner, spawn the unit
    // else do nothing
    for(var jobIndex in currentJobs) {
        if(currentJobs.hasOwnProperty(jobIndex)) {
            var job = currentJobs[jobIndex];
            if(!activeJobs[job[0]] && job[3] > 0) {
                // job isn't being done
                var assignedCreepName = null;
                for(var idleCreepIndex in idleCreepsList) {
                    if(idleCreepsList.hasOwnProperty(idleCreepIndex) && !assignedCreepName) {
                        creep = idleCreepsList[idleCreepIndex];
                        jobData = jobs[job[2]];
                        if(creep.memory.jobs.indexOf(jobData.type) !== -1) {
                            // assign creep
                            assignedCreepName = creep.name;
                            creep.memory.activeJob = {
                                id: job[0],
                                type: job[2],
                                target: job[1]
                            };
                            creep.say("Starting " + job[2] + " with target " + job[1] + ".");
                        }
                    }
                }
                // if the job has been assigned, remove creep from idle list, otherwise spawn a relevant creep
                if(assignedCreepName) {
                    idleCreepsList.splice(idleCreepsList.indexOf(assignedCreepName), 1);
                } else {
                    // determine the best creep type to spawn
                    var validCreepTypes = [];
                    for(var typeName in bodyTypes) {
                        if(bodyTypes.hasOwnProperty(typeName)) {
                            var bodyTypeData = bodyTypes[typeName];
                            if(bodyTypeData.jobs.indexOf(job[2]) !== -1) {
                                validCreepTypes.push([typeName, bodyTypeData.cost]);
                            }
                        }
                    }
                    // sort list by cost
                    validCreepTypes.sort(function(a, b) {
                        return b[1] - a[1];
                    });

                    // if an appropriate design exists (it SHOULD)
                    if(validCreepTypes.length) {
                        var selectedCreepType = validCreepTypes[0];
                        // lazy reuse, cirr, LAZY
                        creepName = generateName(selectedCreepType, numCreeps + 1);

                        // attempt to spawn it
                        var spawning = false;
                        for(var spawnName in Game.spawns) {
                            if(Game.spawns.hasOwnProperty(spawnName)) {
                                var spawn = Game.spawns[spawnName];
                                if(!spawning && spawn.canCreateCreep(bodyTypes[selectedCreepType].body, spawnName)) {
                                    spawn.createCreep(bodyTypes[selectedCreepType].body, creepName, {jobs: bodyTypes[selectedCreepType].jobs});
                                    spawning = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

