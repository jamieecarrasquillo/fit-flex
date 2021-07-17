Information about Associations

As alias creation
-> We have to know use the alias chosen to query
-> For example:
-> console.log((await Ship.findAll({ include: 'leader' })).toJSON());

-> Also, we get a specific method made from that alias
-> console.log((await ship.getLeader()).toJSON());

Methods created for Belongs To
-> fooInstance.getBar()
fooInstance.setBar()
fooInstance.createBar()

Methods created for Has Many
-> fooInstance.getBars()
fooInstance.countBars()
fooInstance.hasBar()
fooInstance.hasBars()
fooInstance.setBars()
fooInstance.addBar()
fooInstance.addBars()
fooInstance.removeBar()
fooInstance.removeBars()
fooInstance.createBar()

->The getter method accepts options just like the usual finder methods (such as findAll)

Methods created for Belongs To Many
-> fooInstance.getBars()
fooInstance.countBars()
fooInstance.hasBar()
fooInstance.hasBars()
fooInstance.setBars()
fooInstance.addBar()
fooInstance.addBars()
fooInstance.removeBar()
fooInstance.removeBars()
fooInstance.createBar()

Fetching all from a Model
-> Fetch all models associated with User
User.findAll({ include: { all: true }});

-> Fetch all models associated with User and their nested associations (recursively)
User.findAll({ include: { all: true, nested: true }});

Fetch soft deleted Models
-> In case you want to eager load soft deleted records you can do that by setting include.paranoid to false:

User.findAll({
include: [{
model: Tool,
as: 'Instruments',
where: { size: { [Op.ne]: 'small' } },
paranoid: false
}]
});
