#pragma once
class Post
{
public:
	Post();
	~Post();

	//Base effect class
	Effect effect;
	//advanced effects
	//NONE OF THESE ARE TESTED, BUT IM P SURE MOST OF THEM WORK xdxd
	Phase phase; //CONCEPT WRITTEN UP
	Vibrance vibrance; //(SATURATION, BUT DONE) Vibrance takes into account luminance and muted colour. idk if i can do that
	Curves curves; //DONE
	Brightness brightness; //ALMOST DONE

						   //basic effects
	Blur blur; //DONE
	Channel channel; //DONE
	Expand expand; //DONE
	Burn burn; //DONE (extremely similar to Curves)
	CRT crt; //DONE
	Invert invert; //DONE
	Flip flip; //DONE

};

