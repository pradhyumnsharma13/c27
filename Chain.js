class Chain {
    constructor(b1, b2) {

        var options = {
            bodyA: b1,
            bodyB: b2,
            stiffness: 0.04,
            length: 10
        }

        this.chain = Matter.Constraint.create(options);
        Matter.World.add(world, this.chain);


    }
    display() {
        line(this.chain.bodyA.position.x,
            this.chain.bodyA.position.y,
            this.chain.bodyB.position.x,
            this.chain.bodyB.position.y
        )
    }











}