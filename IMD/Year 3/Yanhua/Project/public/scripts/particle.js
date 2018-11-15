class particle {
    
    constructor(id, position, rotation, attr){
		
		this.id = id;
        this.position = position;
        this.rotation = rotation;
        this.attr = attr;
		
        this.createEntity = document.createElement('a-entity');
		
        this.createEntity.setAttribute('id', 'TEST' + this.id);
        this.createEntity.setAttribute('position', this.position);
        this.createEntity.setAttribute('rotation', this.rotation);
        this.createEntity.setAttribute('particle-system', this.attr);
		
        //this.draw();
    }
	
    updatePosition(position){
        document.getElementById('TEST' + this.id).setAttribute('position', position);
    }
    updateRotation(rotation){
        document.getElementById('TEST' + this.id).setAttribute('rotation', rotation);
    }
    updateAttribute(attr){
        document.getElementById('TEST' + this.id).setAttribute('partile-system', attr);
    }
	
    getID(){
        return "TEST" + this.id;
    }
    getPosition(){
        return this.position;
    }
    getRotation(){
        return this.rotation;
    }
    getAttribute(){
        return this.attr;
    }
	
    apply(aNode){
        this.grp = aNode;
        //var parent;
		//parent = document.getElementById(aNode.getID());
		this.grp.appendChild(this.createEntity);
    }
	
    delet(){
        let t = document.getElementById(this.grp.getAttribute('id'));
        if(t != null)
            t.parentNode.removeChild(t);
    }
    timeOut(p, time){
        setTimeout(function (){
			p.delet();
			p = null;
		}, time);
    }
}