#include "Main.h"

//global variable for display
ALLEGRO_DISPLAY* display = NULL; //ALLEGRO_DISPLAY is a "user defined type" in Allegro. * shows a pointer

								 //global variable for font
ALLEGRO_FONT *font;

//initialzie Allegro components

void MinimalInit() {
	//Initializes image loading for the initial console prompts
	if (!al_init())
	{
		printf("failed to initialize allegro!\n");
	}

	//initialize image addon
	if (!al_init_image_addon())
	{
		printf("failed to initialize image addon!\n");
		exit(0);
	}


}

void InitAllegro(int W, int H)
{

	//initialize allegro
	if (!al_init())
	{
		printf("failed to initialize allegro!\n");
	}

	//initialize display screen
	display = al_create_display(W, H);
	if (!display)
	{
		printf("failed to create display!\n");
		exit(0);
	}
	else
	{
		printf("ok");
		al_clear_to_color(al_map_rgb(0, 0, 0));
	}

	//initialize keyboard
	if (!al_install_keyboard())
	{
		printf("failed to install keyboard!\n");
		exit(0);
	}

	//initialize image addon
	if (!al_init_image_addon())
	{
		printf("failed to initialize image addon!\n");
		exit(0);
	}

	//initialize mouse
	if (!al_install_mouse())
	{
		printf("failed to install mouse!\n");
		exit(0);
	}
	//initialize primitive shapes
	if (!al_init_primitives_addon())
	{
		printf("failed to initialize primitives!\n");
		exit(0);
	}

	//initialize font
	al_init_font_addon(); // initialize the font addon
	al_init_ttf_addon();// initialize the ttf (True Type Font) addon	 (get fonts here: http://www.1001freefonts.com/)
	font = al_load_ttf_font("uchiyama.ttf", 12, 0); //secodn variable is size
													//font = al_load_font("a4_font.tga", 0, 0); //size variable doesn't matter becasue the font is fixed-size 
	if (!font)
	{
		printf("failed to create font!\n");
		//exit(0);
	}

}

//End and clean up Allegro components
void EndAllegro()
{
	al_destroy_display(display);
}

ALLEGRO_KEYBOARD_STATE key_state;
Post post;

//main function
void main()
{
	
	//BOOL WINAPI GetOpenFileName(_Inout_ LPOPENFILENAME lpofn);
	//int fhand2;
	//_sopen_s(&fhand2, "xd.bmp", _O_WRONLY | _O_CREAT, _SH_DENYNO, _S_IREAD | _S_IWRITE);

	//ofstream output;

	MinimalInit();

	string str;
	int choice = 0,h = 1, iso=0, flip=0;

	do {
		printf_s("Paste your file directory here (eg: c://program files/test.bmp)\n");
		getline(cin, str);
		
		const char* input = str.c_str();

		ALLEGRO_BITMAP* temp = al_load_bitmap(input);

		if (!temp) {
			cout << "Cannot Load Bitmap!\n";
		}
		else {
			cout << "Loaded Successfully!\n";
			h = 0;
		}
	} while (h == 1);
	const char* input = str.c_str();
	ALLEGRO_BITMAP* temp = al_load_bitmap(input);
	ALLEGRO_BITMAP* b = al_clone_bitmap(temp);

	

	h = 1;
	while (h == 1) {
		//ask what effect the user wants on the image
		printf_s("\n0.Blur\n1.Brightness\n2.Channel Isolation\n3.Contrast\n4.Pixel Expansion\n5.Saturation\n6.CRT overlay\n7.Invert\n8.Hue Phase\n9.Burn\n10.Flip Image\n11.No effect (skips visual output, straight to saving file)\n");
		cin >> choice;

		if (choice == 2) {
			printf_s("\nWhich channel would you like to isolate?\n0:red\n1:green\n2:blue\n3:alpha (outputted in black->white)\n");
			cin >> iso;
		}

		if (choice == 10) {
			printf_s("\nWhich direction would you like to flip to?\n0:Normal\n1:Horizonal\n2:Vertical + Normal\n3:Vertical + Horizontal\n");
			cin >> flip;
		}
		if (choice >= 0 || choice <= 11)
			h = 0;
	}

	
	///////////////////////////////////
	// INITIALIZE
	///////////////////////////////////

	
	if (choice != 11) {


		//initialize allegro
		int sw = al_get_bitmap_width(temp), sh = al_get_bitmap_height(temp);
		InitAllegro(sw, sh);


		bool end = false;
		bool done = false;

		printf_s("\n\nPress escape after seeing the effect to proceed to saving the file.\nHold enter to see the original in comparison.\n\n");

		while (end == false) {
			al_get_keyboard_state(&key_state);

			if (al_key_down(&key_state, ALLEGRO_KEY_ESCAPE)) //al_key_down checks the status of a key in the key_state structure
			{
				end = true;
			}

			//apply effect when space pressed
			//get the choice they wanted for which effect
			if (done == false) {
				switch (choice) {
				case 0:
					post.blur.original = temp;
					post.blur.Apply(b);
					break;

				case 1:
					post.brightness.original = temp;
					post.brightness.Apply(b);
					break;

				case 2:
					post.channel.original = temp;
					post.channel.Apply(b, iso);
					break;

				case 3:
					post.curves.original = temp;
					post.curves.Apply(b);
					break;

				case 4:
					post.expand.original = temp;
					post.expand.Apply(b);
					break;

				case 5:
					post.vibrance.original = temp;
					post.vibrance.Apply(b);
					break;

				case 6:
					post.crt.original = temp;
					post.crt.Apply(b);
					break;

				case 7:
					post.invert.original = temp;
					post.invert.Apply(b);
					break;

				case 8:
					post.phase.original = temp;
					post.phase.Apply(b);
					break;

				case 9:
					post.burn.original = temp;
					post.burn.Apply(b);
					break;

				case 10:
					post.flip.original = temp;
					post.flip.Apply(b, flip);
					break;

				default:
					break;
				}
				done = true;
			}

			al_draw_bitmap(b, 0, 0, 0);

			al_flip_display();
			al_rest(0.01);
		}

		EndAllegro();
	}
	printf_s("\nPaste your file directory here to save to (eg: c://program files/test.bmp [INCLUDE THE EXTENSION])\nTested extensions: png, bmp, jpg\n\nEnter 0 to exit program\n\n");
	string out;

	while (out == "") {
		getline(cin, out);

		if (out == "0") {
			out = " ";
		}
		else {

			const char* output = out.c_str();

			al_save_bitmap(output, b);
		}
	}

}
