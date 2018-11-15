function randomRequirements(){
    
    desColorant[0] = null;
    desColorant[2] = null;
    desBloom[0] = null;
    desBloom[2] = null;
    desAdhesive[0] = null;
    desAdhesive[2] = null;
    
    adhesive = -1;
    bloom = -1;
    colorant = -1;
    
    desColorant[1] = Math.round((Math.random()*13)+1);
    desBloom[1] = Math.round((Math.random()*6)+15);
    desAdhesive[1] = Math.round((Math.random()*3)+22);
    
    switch(desColorant[1]){
        //Aluminum
        case(1):
            var rand = Math.round(Math.random()*3);
            var rand2 = Math.round(Math.random()*3);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*3);
            }
            if(rand == 0)
                desColorant[0] = 'Silver-Gray, Metallic';
            if(rand == 1)
                desColorant[0] = '26.98 AMU';
            if(rand == 2)
                desColorant[0] = 'Reflects Radio Waves';

            if(rand2 == 0)
                desColorant[2] = 'Silver-Gray, Metallic';
            if(rand2 == 1)
                desColorant[2] = 'Boiling Point 2470°C';
            if(rand2 == 2)
                desColorant[2] = 'Atomic Number 13';
            break;
        //Magnesium
        case(2):
            var rand = Math.round(Math.random()*3);
            var rand2 = Math.round(Math.random()*3);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*3);
            }
            if(rand == 0)
                desColorant[0] = 'Burns Blinding White';
            if(rand == 1)
                desColorant[0] = '24.31 AMU';
            if(rand == 2)
                desColorant[0] = 'Atomic Number 12';
            if(rand == 3)
                desColorant[0] = 'Melting Point 650°C';

            if(rand2 == 0)
                desColorant[2] = 'Burns Blinding White';
            if(rand2 == 1)
                desColorant[2] = 'Boiling Point 1091°C';
            if(rand2 == 2)
                desColorant[2] = 'Atomic Number 12';
            if(rand2 == 3)
                desColorant[2] = 'Essential in Photosynthesis';
            break;
        //Phosphorus
        case(3):
            var rand = Math.round(Math.random()*3);
            var rand2 = Math.round(Math.random()*3);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*3);
            }
            if(rand == 0)
                desColorant[0] = 'Discovered in 1669';
            if(rand == 1)
                desColorant[0] = '30.97 AMU';
            if(rand == 2)
                desColorant[0] = 'Atomic Number 15';
            if(rand == 3)
                desColorant[0] = 'Boiling Point 280°C';

            if(rand2 == 0)
                desColorant[2] = 'Discovered in 1669';
            if(rand2 == 1)
                desColorant[2] = 'Boiling Point 280.5°C';
            if(rand2 == 2)
                desColorant[2] = 'Atomic Number 15';
            if(rand2 == 3)
                desColorant[2] = 'Melting Point 44.1°C';
            break;
        //Titanium
        case(4):
            var rand = Math.round(Math.random()*3);
            var rand2 = Math.round(Math.random()*3);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*3);
            }
            if(rand == 0)
                desColorant[0] = 'Extremely Lightweight, Strong';
            if(rand == 1)
                desColorant[0] = '26.98 AMU';
            if(rand == 2)
                desColorant[0] = 'Very Low Conductivity';

            if(rand2 == 0)
                desColorant[2] = 'Extremely Lightweight, Strong';
            if(rand2 == 1)
                desColorant[2] = 'Boiling Point 3287°C';
            if(rand2 == 2)
                desColorant[2] = 'Atomic Number 13';
            break;
        //Barium
        case(5):
            var rand = Math.round(Math.random()*3);
            var rand2 = Math.round(Math.random()*3);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*3);
            }
            if(rand == 0)
                desColorant[0] = 'Green when Combusted';
            if(rand == 1)
                desColorant[0] = '137.33 AMU';
            if(rand == 2)
                desColorant[0] = '1/2 Density of Iron';

            if(rand2 == 0)
                desColorant[2] = 'Green when Combusted';
            if(rand2 == 1)
                desColorant[2] = 'Melting Point 727°C';
            if(rand2 == 2)
                desColorant[2] = 'Soft Metal';
            break;
        //Calcium
        case(6):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desColorant[0] = 'Causes Heart Contractions';
            if(rand == 1)
                desColorant[0] = '40.08 AMU';
            if(rand == 2)
                desColorant[0] = 'Melting Point 842°C';

            if(rand2 == 0)
                desColorant[2] = 'Got Milk?';
            if(rand2 == 1)
                desColorant[2] = 'Bone Material';
            if(rand2 == 2)
                desColorant[2] = 'Boiling Point 1484°C';
            break;
        //Bismuth
        case(7):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desColorant[0] = 'Emits Blue';
            if(rand == 1)
                desColorant[0] = '208.98 AMU';
            if(rand == 2)
                desColorant[0] = 'Melting Point 271°C';

            if(rand2 == 0)
                desColorant[2] = 'Emits Blue';
            if(rand2 == 1)
                desColorant[2] = 'Boiling Point 1564°C';
            if(rand2 == 2)
                desColorant[2] = 'Confused with Lead/Tin';
            break;
        //Copper
        case(8):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desColorant[0] = 'Highly Conductive';
            if(rand == 1)
                desColorant[0] = '63.54 AMU';
            if(rand == 2)
                desColorant[0] = 'Pennies Contain This';

            if(rand2 == 0)
                desColorant[2] = 'Highly Conductive';
            if(rand2 == 1)
                desColorant[2] = 'Melting Point 1085°C';
            if(rand2 == 2)
                desColorant[2] = 'Atomic Number 29';
            break;
        //Potassium
        case(9):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desColorant[0] = 'In Bananas';
            if(rand == 1)
                desColorant[0] = '39.09 AMU';
            if(rand == 2)
                desColorant[0] = 'Alkali Metal';

            if(rand2 == 0)
                desColorant[2] = 'In Bananas';
            if(rand2 == 1)
                desColorant[2] = 'Melting Point 63.5°C';
            if(rand2 == 2)
                desColorant[2] = 'Soft/Waxy, Metallic';
            break;
        //Lithium
        case(10):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desColorant[0] = 'Least Dense Metal';
            if(rand == 1)
                desColorant[0] = '6.941 AMU';
            if(rand == 2)
                desColorant[0] = 'Alkali Metal';

            if(rand2 == 0)
                desColorant[2] = 'Soft, Silvery Metal';
            if(rand2 == 1)
                desColorant[2] = 'Melting Point 180.5°C';
            if(rand2 == 2)
                desColorant[2] = 'In Modern Batteries';
            break;
        //Strontium
        case(11):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desColorant[0] = 'Silver-Yellow Metal';
            if(rand == 1)
                desColorant[0] = '87.62 AMU';
            if(rand == 2)
                desColorant[0] = 'Atomic Number 38';

            if(rand2 == 0)
                desColorant[2] = 'Silver-Yellow Metal';
            if(rand2 == 1)
                desColorant[2] = 'Melting Point 769°C';
            if(rand2 == 2)
                desColorant[2] = 'Found In Lettuce';
            break;
        //Sodium
        case(12):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desColorant[0] = 'Combusts in Water';
            if(rand == 1)
                desColorant[0] = '22.99 AMU';
            if(rand == 2)
                desColorant[0] = 'In Sea Water';
                

            if(rand2 == 0)
                desColorant[2] = 'Worldwide Seasoning';
            if(rand2 == 1)
                desColorant[2] = 'Melting Point 97.5°C';
            if(rand2 == 2)
                desColorant[2] = 'Essential Nutrient';
            break;
        //Antimony
        case(13):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desColorant[0] = 'Occurs as Compound';
            if(rand == 1)
                desColorant[0] = '121.75 AMU';
            if(rand == 2)
                desColorant[0] = 'Is a Metalloid';
                

            if(rand2 == 0)
                desColorant[2] = 'Occurs as Compound';
            if(rand2 == 1)
                desColorant[2] = 'Periodic Symbol: Sb';
            if(rand2 == 2)
                desColorant[2] = 'Member of Group 15';
            break;
        //Zinc
        case(14):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desColorant[0] = 'In Sea Water';
            if(rand == 1)
                desColorant[0] = 'Melting Point 420°C';
            if(rand == 2)
                desColorant[0] = 'Atomic Number 30';
                

            if(rand2 == 0)
                desColorant[2] = 'Essential Nutrient';
            if(rand2 == 1)
                desColorant[2] = 'Boiling Point 907°C';
            if(rand2 == 2)
                desColorant[2] = 'Contains 10 Isotopes';
            break;
        default:
            break;
    }
    switch(desBloom[1]){
        //Chlorate
        case(15):
            var rand = Math.round(Math.random()*3);

            if(rand == 0)
                desBloom[0] = 'Makes a Star Shape';
            if(rand == 1)
                desBloom[0] = 'Weight: 83.447g/mol';
            if(rand == 2)
                desBloom[0] = 'Disinfectant';
            if(rand == 3)
                desBloom[0] = 'ClO3 e:1-';
            break;
        //Nitrate
        case(16):
            var rand = Math.round(Math.random()*3);

            if(rand == 0)
                desBloom[0] = 'Makes a Comet Shape';
            if(rand == 1)
                desBloom[0] = 'Weight: 62.004g/mol';
            if(rand == 2)
                desBloom[0] = 'Molecular Mass 62.00u';
            if(rand == 3)
                desBloom[0] = 'NO3 e:1-';
            break;
        //Chlorate+Nitrate
        case(17):
            var rand = Math.round(Math.random()*3);
            var rand2 = Math.round(Math.random()*3);

            if(rand == 0)
                desBloom[0] = 'Makes a Star';
            if(rand == 1)
                desBloom[0] = 'Weight: 83.447g/mol';
            if(rand == 2)
                desBloom[0] = 'Disinfectant';
            if(rand == 3)
                desBloom[0] = 'ClO3 e:1-';
                
            if(rand2 == 0)
                desBloom[2] = 'Makes a Comet';
            if(rand2 == 1)
                desBloom[2] = 'Weight: 62.004g/mol';
            if(rand2 == 2)
                desBloom[2] = 'Molecular Mass 62.00u';
            if(rand2 == 3)
                desBloom[2] = 'NO3 e:1-';
            break;
        //Oxide
        case(18):
            var rand = Math.round(Math.random()*2);

            if(rand == 0)
                desBloom[0] = 'Makes Crackle Stars';
            if(rand == 1)
                desBloom[0] = 'Cannot Exist On Its Own';
            if(rand == 2)
                desBloom[0] = 'Common in Rust';
            if(rand == 3)
                desBloom[0] = 'Exists in Many Forms';
            break;
        //Nitrate + Fine Charcoal
        case(19):
            var rand = Math.round(Math.random()*3);
            var rand2 = Math.round(Math.random()*3);

            if(rand == 0)
                desBloom[0] = 'Makes a Comet';
            if(rand == 1)
                desBloom[0] = 'Weight: 62.004g/mol';
            if(rand == 2)
                desBloom[0] = 'Molecular Mass 62.00u';
            if(rand == 3)
                desBloom[0] = 'NO3 e:1-';
                
            if(rand2 == 0)
                desBloom[2] = 'Burns Well';
            if(rand2 == 1)
                desBloom[2] = 'Can Purify Water';
            if(rand2 == 2)
                desBloom[2] = 'Looks Black';
            if(rand2 == 3)
                desBloom[2] = 'Used in Barbecue';
            break;
        //Perchlorate + Sulfate
        case(20):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            if(rand == 0)
                desBloom[0] = 'Biproduct of Rocket Fuel';
            if(rand == 1)
                desBloom[0] = 'Usually Colourless';
            if(rand == 2)
                desBloom[0] = 'ClO4-';
                
            if(rand2 == 0)
                desBloom[2] = 'Molecular Mass: 96.06u';
            if(rand2 == 1)
                desBloom[2] = 'Found in Hygiene Products';
            if(rand2 == 2)
                desBloom[2] = 'SO4 e:2-';
            break;
        //Perchlorate + Chlorate
        case(21):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*3);

            if(rand == 0)
                desBloom[0] = 'Biproduct of Rocket Fuel';
            if(rand == 1)
                desBloom[0] = 'Usually Colourless';
            if(rand == 2)
                desBloom[0] = 'ClO4-';
                
            if(rand2 == 0)
                desBloom[2] = 'Makes a Star';
            if(rand2 == 1)
                desBloom[2] = 'Weight: 83.447g/mol';
            if(rand2 == 2)
                desBloom[2] = 'Disinfectant';
            if(rand2 == 3)
                desBloom[2] = 'ClO3 e:1-';
            break;
        default:
            break;
    }
    switch(desAdhesive[1]){
        //Shellac
        case(22):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desAdhesive[0] = 'Found in Forests of India';
            if(rand == 1)
                desAdhesive[0] = 'Produced by "Lac" Bug';
            if(rand == 2)
                desAdhesive[0] = 'Amber-Coloured Flakes';
                

            if(rand2 == 0)
                desAdhesive[2] = 'Found in Forests of Thailand';
            if(rand2 == 1)
                desAdhesive[2] = 'Found in Nail Polish';
            if(rand2 == 2)
                desAdhesive[2] = 'Amber-Coloured Flakes';
            break;
        //Dextrin
        case(23):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desAdhesive[0] = 'Similar To Starch';
            if(rand == 1)
                desAdhesive[0] = 'Made by Heating Starch';
            if(rand == 2)
                desAdhesive[0] = 'Improves Blood-Sugar';
                

            if(rand2 == 0)
                desAdhesive[2] = 'Inexpensive';
            if(rand2 == 1)
                desAdhesive[2] = 'Made by Heating Starch';
            if(rand2 == 2)
                desAdhesive[2] = 'Improves Blood-Sugar';
            break;
        //Parlon
        case(24):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desAdhesive[0] = 'Mainly used for Fireworks';
            if(rand == 1)
                desAdhesive[0] = 'Called Chlorinated Rubber';
            if(rand == 2)
                desAdhesive[0] = 'Acetone-Soluble Polymer';
                

            if(rand2 == 0)
                desAdhesive[2] = 'Mainly used for Fireworks';
            if(rand2 == 1)
                desAdhesive[2] = 'Relatively New Product';
            if(rand2 == 2)
                desAdhesive[2] = 'For Pyrokinetics';
            break;
        //Red Gum
        case(25):
            var rand = Math.round(Math.random()*2);
            var rand2 = Math.round(Math.random()*2);

            while(rand2 == rand){
                rand2 = Math.round(Math.random()*2);
            }
            if(rand == 0)
                desAdhesive[0] = 'Widely Used Organic Fuel';
            if(rand == 1)
                desAdhesive[0] = 'From Trees In Australia';
            if(rand == 2)
                desAdhesive[0] = 'Used to Seal Wood Surfaces';
                

            if(rand2 == 0)
                desAdhesive[2] = 'Widely Used Organic Fuel';
            if(rand2 == 1)
                desAdhesive[2] = 'Also Called Accaroid Resin';
            if(rand2 == 2)
                desAdhesive[2] = 'Soluble in Alcohol';
            break;
        default:
            break;
    }
    
    var value_1_1 = document.querySelector('#req-1-text-1');
    var value_1_2 = document.querySelector('#req-1-text-2');

    var value_2_1 = document.querySelector('#req-2-text-1');
    var value_2_2 = document.querySelector('#req-2-text-2');

    var value_3_1 = document.querySelector('#req-3-text-1');
    var value_3_2 = document.querySelector('#req-3-text-2');

    value_1_1.setAttribute('text', 'value:' + desColorant[0]);
    value_2_1.setAttribute('text', 'value:' + desBloom[0]);
    value_3_1.setAttribute('text', 'value:' + desAdhesive[0]);

    value_1_2.setAttribute('text', 'value:' + desColorant[2]);
    
    if(desBloom[2])
        value_2_2.setAttribute('text', 'value:' + desBloom[2]);
    else
        value_2_2.setAttribute('text', 'value:');
    
    value_3_2.setAttribute('text', 'value:' + desAdhesive[2]);
    
}