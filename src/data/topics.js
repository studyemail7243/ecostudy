export const topics = [
  {
    id: 1,
    title: "Ecosystem Structure",
    description: "Understanding the organization and functioning of ecosystems",
    content: [
      {
        heading: "Introduction & Definition",
        text: "An ecosystem is a functional unit of nature consisting of all living organisms (biotic components) and their non-living environment (abiotic components) interacting together as a system. It can be as small as a pond or as large as a forest. The term was coined by Sir Arthur Tansley in 1935. Ecosystems are self-sustaining, open systems with continuous exchange of energy and matter."
      },
      {
        heading: "Biotic Components",
        points: [
          "Producers (Autotrophs): Green plants, algae, and some bacteria that convert solar energy into chemical energy through photosynthesis. They form the base of all food chains.",
          "Consumers (Heterotrophs): Organisms that cannot make their own food. Primary consumers (herbivores) eat plants; secondary consumers (carnivores) eat herbivores; tertiary consumers eat other carnivores.",
          "Decomposers (Saprotrophs): Bacteria and fungi that break down dead organic matter, releasing nutrients back into the soil for producers to reuse. Without decomposers, nutrients would be locked in dead organisms."
        ]
      },
      {
        heading: "Abiotic Components",
        points: [
          "Climatic factors: Light, temperature, humidity, wind, rainfall — these determine the types of organisms that can survive in an area.",
          "Edaphic factors: Soil composition, pH, texture, nutrients, and water availability. These affect root growth and plant distribution.",
          "Topographic factors: Altitude, slope, and aspect (direction of slope) influence sunlight exposure and drainage patterns.",
          "Inorganic substances: Water, carbon dioxide, oxygen, nitrogen, phosphorus — essential for life processes."
        ]
      },
      {
        heading: "Energy Flow & Trophic Levels",
        text: "Energy enters the ecosystem through producers and flows through various trophic levels. At each transfer, approximately 90% of energy is lost as heat (according to the 10% Law by Lindemann). Only about 10% is transferred to the next level. This unidirectional flow creates ecological pyramids: Pyramid of Numbers, Pyramid of Biomass, and Pyramid of Energy. The pyramid of energy is always upright."
      },
      {
        heading: "Food Chains & Food Webs",
        points: [
          "Food Chain: A linear sequence of organisms where each is eaten by the next member. Example: Grass → Rabbit → Fox → Decomposer.",
          "Food Web: A complex network of interconnected food chains. It provides stability to the ecosystem because if one species is removed, alternatives exist.",
          "Grazing food chain: Starts with green plants and goes to herbivores and carnivores (dominant in most ecosystems).",
          "Detritus food chain: Starts with dead organic matter and goes to decomposers and detritivores (major in forests)."
        ]
      },
      {
        heading: "Conclusion",
        text: "Understanding ecosystem structure is fundamental because it reveals how energy flows, nutrients cycle, and organisms interact. Disruption at any trophic level (e.g., removing apex predators) can cause cascading effects known as trophic cascades. The stability of an ecosystem depends on its biodiversity and the complexity of its food webs."
      }
    ],
    memoryTricks: [
      { title: "P-C-D", desc: "Producers → Consumers → Decomposers (The life cycle triangle)." },
      { title: "10% Law", desc: "Remember: Only 10% energy passes to the next level — like a filter that removes 90% at each step." },
      { title: "Food Web = Safety Net", desc: "More connections = more stability. Think of it like a spider web — break one strand, the web still holds." },
      { title: "Pyramid Shape", desc: "Energy pyramid is always upright because energy decreases at each level." }
    ]
  },
  {
    id: 2,
    title: "Ecosystem Classification",
    description: "Different types of ecosystems based on origin, habitat, and size",
    content: [
      {
        heading: "Introduction",
        text: "Ecosystems can be classified based on various criteria: origin (natural vs. artificial), habitat (terrestrial vs. aquatic), size (micro vs. macro), and human intervention. This classification helps scientists study ecosystems systematically and develop appropriate conservation strategies."
      },
      {
        heading: "Natural vs. Artificial Ecosystems",
        points: [
          "Natural Ecosystems: Self-sustaining, operate without human intervention. Examples: forests, deserts, oceans, lakes, grasslands. They have high biodiversity and complex food webs.",
          "Artificial Ecosystems: Created and maintained by humans. Examples: crop fields, aquariums, gardens, urban parks. They have low biodiversity, simple food chains, and require external inputs (fertilizers, water)."
        ]
      },
      {
        heading: "Terrestrial Ecosystems",
        points: [
          "Forest Ecosystems: Tropical rainforests (highest biodiversity), temperate deciduous forests, coniferous forests (taiga). They store massive carbon and regulate climate.",
          "Grassland Ecosystems: Tropical savannas, temperate prairies. Dominated by grasses with few trees. Adapted to fire and grazing.",
          "Desert Ecosystems: Hot deserts (Sahara) and cold deserts (Ladakh). Organisms have extreme adaptations: nocturnal behavior, water storage, reduced leaves."
        ]
      },
      {
        heading: "Aquatic Ecosystems",
        points: [
          "Freshwater Ecosystems: Lentic (standing water: lakes, ponds) and Lotic (running water: rivers, streams). Lakes show zonation: littoral, limnetic, and profundal zones.",
          "Marine Ecosystems: Oceans cover 71% of Earth's surface. Zones: intertidal, neritic, oceanic, benthic. Coral reefs are the 'rainforests of the sea' with highest marine biodiversity.",
          "Estuaries: Where rivers meet the sea. Highly productive, brackish water, nursery for many fish species."
        ]
      },
      {
        heading: "Other Classifications",
        points: [
          "Micro-ecosystems: Small-scale systems like a rotting log, a leaf, or a puddle. Useful for studying ecosystem processes in controlled settings.",
          "Macro-ecosystems: Large systems like the biosphere, biomes (tundra, taiga, tropical rainforest), or major ocean basins.",
          "Based on Nutrition: Autotrophic (dominated by producers) and Heterotrophic (dominated by consumers/decomposers, like deep-sea vents)."
        ]
      },
      {
        heading: "Conclusion",
        text: "Ecosystem classification helps us understand the diversity of life on Earth and the unique challenges each ecosystem faces. Climate change, pollution, and deforestation affect different ecosystems differently. Effective conservation requires ecosystem-specific strategies rather than one-size-fits-all approaches."
      }
    ],
    memoryTricks: [
      { title: "N-A", desc: "Natural = No human help; Artificial = Always needs human help." },
      { title: "T-A", desc: "Terrestrial = Land; Aquatic = Water. Think 'Terra' means land." },
      { title: "Lentic vs Lotic", desc: "Lentic = Lazy (standing water); Lotic = Running (flowing water)." },
      { title: "Coral Reefs", desc: "'Rainforests of the Sea' — remember both have maximum biodiversity in their domains." }
    ]
  },
  {
    id: 3,
    title: "Ecosystem Values",
    description: "Economic, ecological, and social services provided by ecosystems",
    content: [
      {
        heading: "Introduction",
        text: "Ecosystems provide a wide range of benefits to humans and other living organisms. These values are often categorized into direct use values, indirect use values, and non-use values. Understanding these values is crucial for justifying conservation efforts and sustainable development. The Millennium Ecosystem Assessment (2005) classified ecosystem services into four major categories."
      },
      {
        heading: "Provisioning Services (Direct Values)",
        points: [
          "Food: Crops, fish, wild game, fruits, and nuts from forests, oceans, and grasslands.",
          "Water: Freshwater for drinking, irrigation, and industrial use from rivers, lakes, and groundwater.",
          "Raw Materials: Timber, fiber, rubber, fuelwood, and medicinal plants from forests.",
          "Genetic Resources: Wild relatives of crops provide genes for disease resistance and improved yields."
        ]
      },
      {
        heading: "Regulating Services (Indirect Values)",
        points: [
          "Climate Regulation: Forests and oceans absorb CO2, reducing global warming. Wetlands regulate local temperatures.",
          "Water Regulation & Purification: Wetlands filter pollutants, recharge groundwater, and prevent flooding by acting as natural sponges.",
          "Disease Control: Biodiversity reduces disease transmission by maintaining balanced predator-prey relationships.",
          "Pollination: Bees, butterflies, and birds pollinate 75% of global crop species. Economic value: ~$235-577 billion annually."
        ]
      },
      {
        heading: "Cultural & Aesthetic Services",
        points: [
          "Recreation & Tourism: National parks, beaches, wildlife sanctuaries generate billions in tourism revenue.",
          "Spiritual & Religious Value: Many ecosystems are sacred in indigenous cultures (e.g., sacred groves in India).",
          "Aesthetic & Inspiration: Natural landscapes inspire art, literature, photography, and scientific curiosity.",
          "Education & Research: Ecosystems serve as living laboratories for understanding biology, ecology, and medicine."
        ]
      },
      {
        heading: "Supporting Services",
        points: [
          "Soil Formation: Weathering of rocks and decomposition create fertile soil for agriculture.",
          "Nutrient Cycling: Carbon, nitrogen, phosphorus cycles maintain life by recycling essential elements.",
          "Primary Production: Photosynthesis by plants forms the basis of all food chains.",
          "Biodiversity Maintenance: Ecosystems provide habitat, genetic diversity, and evolutionary potential."
        ]
      },
      {
        heading: "Conclusion",
        text: "Ecosystem values are often underestimated because many services (like pollination, climate regulation) are 'free' and invisible. The total economic value of global ecosystem services is estimated at $125-140 trillion per year — more than global GDP. Losing ecosystems means losing these services, which is extremely costly or impossible to replace artificially. This makes ecosystem conservation not just an environmental issue but an economic imperative."
      }
    ],
    memoryTricks: [
      { title: "P-R-C-S", desc: "Provisioning, Regulating, Cultural, Supporting — the four service categories." },
      { title: "Free Services", desc: "Nature gives us services worth trillions for FREE — pollination, clean air, water purification." },
      { title: "Bee Value", desc: "Pollination alone is worth $235-577 billion/year — imagine paying bees a salary!" },
      { title: "Sacred Groves", desc: "In India, sacred groves protected forests for centuries — religion saved ecology!" }
    ]
  },
  {
    id: 4,
    title: "Land Resources",
    description: "Types, uses, degradation, and conservation of land",
    content: [
      {
        heading: "Introduction",
        text: "Land is the most important natural resource, covering about 30% of Earth's surface. It provides the foundation for agriculture, forestry, human settlements, industries, and infrastructure. India has about 2.4% of the world's land area supporting 17.5% of the world's population, making land resource management critical."
      },
      {
        heading: "Types of Land Resources",
        points: [
          "Agricultural Land: About 11% of Earth's land is arable. India has about 43% of its land under agriculture. Includes crop land, pasture, and mixed farming.",
          "Forest Land: Covers about 31% of global land area. India has 24.6% forest cover (Forest Survey of India 2021). Provides timber, fuel, and ecosystem services.",
          "Urban & Industrial Land: Used for cities, roads, factories, and airports. Growing rapidly with urbanization.",
          "Wasteland: Degraded land that has lost its productivity due to erosion, salinity, or mining. India has about 55.76 million hectares of wasteland."
        ]
      },
      {
        heading: "Land Degradation",
        points: [
          "Soil Erosion: Wind and water remove topsoil. Causes: deforestation, overgrazing, improper farming. India loses 5.3 billion tonnes of soil annually.",
          "Desertification: Conversion of fertile land into desert. Affects 25% of global land. Caused by overgrazing, drought, and poor irrigation.",
          "Salinization: Accumulation of salts in soil due to excessive irrigation (especially in arid regions). Reduces crop yields.",
          "Waterlogging: Excess water in soil due to poor drainage. Common in canal-irrigated areas."
        ]
      },
      {
        heading: "Land Conservation Measures",
        points: [
          "Afforestation & Reforestation: Planting trees prevents erosion, restores soil, and increases biodiversity. Social forestry and agroforestry are effective approaches.",
          "Contour Plowing & Terracing: Farming along slopes reduces water runoff and soil erosion. Used in hilly regions like the Himalayas and Western Ghats.",
          "Shelter Belts & Windbreaks: Rows of trees planted to reduce wind erosion in arid regions.",
          "Soil Testing & Balanced Fertilization: Prevents nutrient depletion and reduces chemical pollution.",
          "Integrated Watershed Management: Managing land and water resources together in a defined watershed area."
        ]
      },
      {
        heading: "Land Use Planning",
        text: "Land use planning allocates land for different purposes based on soil quality, topography, climate, and water availability. It prevents conflicts between agriculture, industry, and urbanization. GIS (Geographic Information Systems) and remote sensing are modern tools for land use planning. Sustainable land management practices ensure that land remains productive for future generations."
      },
      {
        heading: "Conclusion",
        text: "Land is a finite resource. With growing population and urbanization, pressure on land is increasing. About 40% of global land is already degraded. The UN Sustainable Development Goal 15 targets land degradation neutrality by 2030. Conservation of land resources is essential for food security, biodiversity, and sustainable development."
      }
    ],
    memoryTricks: [
      { title: "India Stats", desc: "2.4% land, 17.5% people — India works HARD on its land!" },
      { title: "Soil Loss", desc: "India loses 5.3 billion tonnes of soil/year — that's like losing a mountain!" },
      { title: "Contour = Control", desc: "Contour farming controls water flow on slopes — 'C' for both!" },
      { title: "SDG 15", desc: "Goal 15 = Life on Land — remember land degradation target by 2030." }
    ]
  },
  {
    id: 5,
    title: "Water Resources",
    description: "Sources, distribution, uses, and conservation of water",
    content: [
      {
        heading: "Introduction",
        text: "Water is the most essential resource for life. Earth is called the 'Blue Planet' because 71% of its surface is covered by water. However, only 2.5% is freshwater, and just 0.3% is accessible in rivers, lakes, and groundwater. With growing population and climate change, water scarcity is becoming a global crisis. India has 4% of world's water resources but 17.5% of population."
      },
      {
        heading: "Sources of Water",
        points: [
          "Surface Water: Rivers, lakes, ponds, and reservoirs. Major rivers of India: Ganga, Brahmaputra, Godavari, Krishna. Rivers provide about 75% of India's water supply.",
          "Groundwater: Aquifers and water tables. India is the largest groundwater user in the world. Accounts for 60% of irrigation and 85% of drinking water.",
          "Rainwater: Primary source that replenishes both surface and groundwater. India's average rainfall: 1,170 mm/year, but highly uneven.",
          "Glaciers & Snowmelt: Himalayan glaciers are the 'water towers' of Asia, feeding major rivers."
        ]
      },
      {
        heading: "The Water Cycle",
        points: [
          "Evaporation: Water turns into vapor from oceans, lakes, and rivers. Solar energy drives this process.",
          "Transpiration: Plants release water vapor through leaves. A single tree can transpire 100 gallons/day.",
          "Condensation: Water vapor cools and forms clouds.",
          "Precipitation: Rain, snow, hail fall back to Earth. Distributes freshwater globally.",
          "Infiltration & Runoff: Water seeps into ground or flows into rivers, completing the cycle."
        ]
      },
      {
        heading: "Water Scarcity & Pollution",
        points: [
          "Physical Scarcity: Not enough water available. Affects arid regions like Rajasthan and parts of Africa.",
          "Economic Scarcity: Water exists but infrastructure is lacking. Common in developing nations.",
          "Water Pollution: Industrial discharge, sewage, agricultural runoff (fertilizers, pesticides), and plastic waste contaminate water bodies. Ganga Action Plan and Namami Gange are major cleanup efforts.",
          "Groundwater Depletion: Over-extraction causes water tables to drop. In Punjab, water table drops 1m/year."
        ]
      },
      {
        heading: "Water Conservation Methods",
        points: [
          "Rainwater Harvesting: Collecting roof runoff in tanks or recharging groundwater. Mandatory in many Indian cities.",
          "Watershed Management: Protecting and restoring the natural boundaries where water drains into a common outlet.",
          "Drip Irrigation: Delivers water directly to plant roots, saving 30-50% water compared to flood irrigation.",
          "Water Recycling & Reuse: Treating wastewater for industrial and agricultural use. Singapore's NEWater is a model.",
          "Desalination: Converting seawater to freshwater. Used in Israel, Saudi Arabia, and Chennai (India)."
        ]
      },
      {
        heading: "Conclusion",
        text: "Water is a finite, non-substitutable resource. By 2025, two-thirds of the world's population may face water stress. Sustainable water management requires a combination of conservation, recycling, pollution control, and equitable distribution. The UN's Sustainable Development Goal 6 aims for universal access to clean water and sanitation by 2030."
      }
    ],
    memoryTricks: [
      { title: "2.5% Rule", desc: "Only 2.5% is fresh, and 0.3% is usable — like a tiny cup from a swimming pool!" },
      { title: "Water Cycle ETCP", desc: "Evaporation → Transpiration → Condensation → Precipitation — ETCP (Easy To Count Points)." },
      { title: "India's Groundwater", desc: "India uses MOST groundwater in the world — we are the groundwater champions!" },
      { title: "Drip = Save", desc: "Drip irrigation saves 30-50% water — drips don't waste, they save!" }
    ]
  },
  {
    id: 6,
    title: "Biodiversity Types",
    description: "Genetic, species, and ecosystem diversity across the planet",
    content: [
      {
        heading: "Introduction",
        text: "Biodiversity (Biological Diversity) is the variety of life on Earth at all levels — genes, species, and ecosystems. The term was popularized by E.O. Wilson. India is one of the 17 megadiverse countries, hosting 8.1% of global species. Biodiversity is crucial for ecosystem stability, food security, medicine, and resilience to environmental changes."
      },
      {
        heading: "Genetic Diversity",
        points: [
          "Definition: Variation in genes within a species. Higher genetic diversity means better adaptability to diseases and climate change.",
          "Examples: Different varieties of rice (over 50,000 in India), breeds of dogs, wild vs. domestic wheat.",
          "Importance: Genes are the raw material for evolution. Low genetic diversity makes species vulnerable (e.g., cheetahs have very low genetic diversity).",
          "Conservation: Seed banks (Svalbard Global Seed Vault), gene banks, and preserving wild relatives of crops."
        ]
      },
      {
        heading: "Species Diversity",
        points: [
          "Definition: Variety of different species in an area. Scientists have described about 1.8 million species; estimates suggest 8-15 million exist.",
          "Measurement: Species richness (number of species) and species evenness (relative abundance).",
          "Hotspots: Areas with high species richness and endemism (species found nowhere else). Example: Western Ghats, Sundaland, Madagascar.",
          "India's Status: 45,000 plant species, 91,000 animal species, 12% of world's birds. Endemic species: Nilgiri tahr, lion-tailed macaque."
        ]
      },
      {
        heading: "Ecosystem Diversity",
        points: [
          "Definition: Variety of ecosystems in a region or on Earth. Includes forests, grasslands, deserts, wetlands, coral reefs, and tundra.",
          "Alpha Diversity: Species diversity within a single habitat or community.",
          "Beta Diversity: Change in species composition between different habitats. High beta diversity means very different communities.",
          "Gamma Diversity: Total species diversity across a large region (e.g., a country or continent)."
        ]
      },
      {
        heading: "Biodiversity Hotspots & Patterns",
        points: [
          "25 Biodiversity Hotspots globally: Cover only 2.4% of Earth's land but contain 50% of plant species. India has 4: Himalaya, Western Ghats, Indo-Burma, Sundaland.",
          "Latitudinal Gradient: Biodiversity decreases from tropics to poles. Tropical rainforests have the highest biodiversity.",
          "Species-Area Relationship: Larger areas contain more species (Alexander von Humboldt's observation).",
          "Evolutionary Time: Older, stable ecosystems have more species than recently disturbed ones."
        ]
      },
      {
        heading: "Conclusion",
        text: "Biodiversity is the foundation of ecosystem services and human well-being. The current extinction rate is 100-1000 times the natural background rate, primarily due to habitat destruction, pollution, and climate change. The Convention on Biological Diversity (CBD) aims to conserve biodiversity, use it sustainably, and ensure fair benefit-sharing. Protecting biodiversity means protecting our own future."
      }
    ],
    memoryTricks: [
      { title: "3 Levels: G-S-E", desc: "Genetic → Species → Ecosystem. Think of a nesting doll: genes inside species, species inside ecosystems." },
      { title: "India's Stats", desc: "17 megadiverse countries, 4 hotspots, 50,000 rice varieties — India is biodiversity-rich!" },
      { title: "Hotspots = 2.4% Land, 50% Plants", desc: "Small area, HUGE variety — like a tiny backpack carrying all your books!" },
      { title: "Extinction Rate", desc: "100-1000x faster than natural — we're in a 'sixth mass extinction'!" }
    ]
  },
  {
    id: 7,
    title: "Values & Conservation",
    description: "Why biodiversity matters and how we protect it",
    content: [
      {
        heading: "Introduction",
        text: "Biodiversity has immense value — from providing food and medicine to regulating climate and inspiring culture. Conservation means protecting and managing biodiversity to prevent extinction and maintain ecosystem function. The Convention on Biological Diversity (1992) and India's Biological Diversity Act (2002) provide legal frameworks for conservation."
      },
      {
        heading: "Values of Biodiversity",
        points: [
          "Consumptive Use Value: Direct use of resources — food, timber, fuel, medicine. 80% of people in developing countries rely on traditional plant-based medicines.",
          "Productive Use Value: Commercial products from biodiversity — pharmaceuticals, cosmetics, biotechnology. Aspirin (from willow bark), Taxol (from Pacific yew for cancer).",
          "Social Value: Recreation, tourism, cultural identity, and religious significance. Sacred groves in India protect patches of forests.",
          "Ethical Value: Every species has a right to exist. Humans are not the only species with intrinsic worth. This is the deep ecology philosophy.",
          "Aesthetic Value: Beauty of nature inspires art, poetry, and mental well-being. Ecotourism generates billions in revenue."
        ]
      },
      {
        heading: "In-situ Conservation (On-site)",
        points: [
          "Definition: Conservation in the natural habitat. Allows species to evolve naturally and maintain ecological relationships.",
          "National Parks: Strictly protected, no human habitation. India has 106 national parks (2023). Example: Jim Corbett, Kaziranga.",
          "Wildlife Sanctuaries: Protection of specific species. Limited human activities allowed. India has 573 wildlife sanctuaries.",
          "Biosphere Reserves: UNESCO-designated areas combining conservation, research, and sustainable development. India has 18 biosphere reserves.",
          "Sacred Groves: Community-protected forest patches with religious significance. Found in India, Ghana, and Mexico."
        ]
      },
      {
        heading: "Ex-situ Conservation (Off-site)",
        points: [
          "Definition: Conservation outside natural habitats. Used when species are critically endangered or habitats are destroyed.",
          "Zoological Parks: Breeding endangered species in captivity. Indian zoos participate in breeding programs for tigers, rhinos, and vultures.",
          "Botanical Gardens: Conservation of rare and endangered plants. India has about 140 botanical gardens.",
          "Gene Banks: Storage of seeds, pollen, embryos, and DNA at very low temperatures. Svalbard Global Seed Vault stores 1.2 million seed samples.",
          "Tissue Culture & Cryopreservation: Advanced techniques for preserving genetic material of threatened species."
        ]
      },
      {
        heading: "Conservation Strategies",
        points: [
          "Protected Area Networks: Combining national parks, sanctuaries, and corridors to allow wildlife movement.",
          "Community-Based Conservation: Involving local people in conservation. Example: Bishnoi community in Rajasthan protecting blackbucks.",
          "Legislation: Wildlife Protection Act (1972), Forest Conservation Act (1980), Biodiversity Act (2002) in India.",
          "International Cooperation: CITES (Convention on International Trade in Endangered Species), CBD, RAMSAR Convention (wetlands)."
        ]
      },
      {
        heading: "Conclusion",
        text: "Conservation is not just about saving charismatic species like tigers and elephants. It is about maintaining the web of life that sustains humans. In-situ conservation is preferred because it preserves entire ecosystems and evolutionary processes. Ex-situ conservation acts as insurance for critically endangered species. A combination of both approaches, supported by strong legislation and public awareness, is the key to preserving biodiversity."
      }
    ],
    memoryTricks: [
      { title: "In-situ = In Nature", desc: "In-situ means 'in place' — conservation in the natural home." },
      { title: "Ex-situ = Exit Nature", desc: "Ex-situ means 'out of place' — zoos, gardens, seed banks." },
      { title: "Sacred Groves", desc: "Religion saved forests in India — temples = tree protectors!" },
      { title: "Bishnoi = Animal Protectors", desc: "Bishnoi community in Rajasthan — 500 years of wildlife protection!" }
    ]
  },
  {
    id: 8,
    title: "Global Warming",
    description: "Causes, effects, and mitigation of global temperature rise",
    content: [
      {
        heading: "Introduction",
        text: "Global warming refers to the long-term increase in Earth's average surface temperature due to human activities, primarily burning fossil fuels. Since the Industrial Revolution (1850s), global temperature has risen by about 1.1°C. The IPCC (Intergovernmental Panel on Climate Change) warns that exceeding 1.5°C will cause irreversible damage. 2015-2023 were the warmest years on record."
      },
      {
        heading: "Causes of Global Warming",
        points: [
          "Greenhouse Gas Emissions: CO2 from burning coal, oil, gas; methane from livestock and rice paddies; nitrous oxide from fertilizers; CFCs from refrigerants. CO2 levels rose from 280 ppm (pre-industrial) to 420 ppm (2023).",
          "Deforestation: Forests absorb CO2. Cutting trees releases stored carbon and reduces absorption capacity. 10 million hectares of forest are lost annually.",
          "Industrial Activities: Cement production, steel manufacturing, and chemical industries release massive CO2.",
          "Agriculture: Livestock produces methane; rice paddies and fertilizers produce nitrous oxide. Agriculture accounts for 10-12% of global emissions."
        ]
      },
      {
        heading: "Effects of Global Warming",
        points: [
          "Rising Sea Levels: Thermal expansion of water and melting glaciers cause sea levels to rise 3.3 mm/year. Threatens coastal cities like Mumbai, Kolkata, and Miami.",
          "Extreme Weather Events: More frequent and intense heatwaves, hurricanes, floods, and droughts. Example: 2022 Pakistan floods affected 33 million people.",
          "Melting Ice Caps & Glaciers: Arctic sea ice declining 13% per decade. Himalayan glaciers feeding Ganga and Brahmaputra are retreating.",
          "Ocean Acidification: Oceans absorb 30% of emitted CO2, becoming more acidic. Threatens coral reefs and shell-forming organisms.",
          "Biodiversity Loss: Species extinction, disrupted migration patterns, coral bleaching. 1 million species face extinction risk."
        ]
      },
      {
        heading: "Mitigation Strategies",
        points: [
          "Renewable Energy: Solar, wind, hydro, and geothermal replace fossil fuels. Solar is now the cheapest electricity in history.",
          "Afforestation & Reforestation: Planting trees absorbs CO2. The Bonn Challenge aims to restore 350 million hectares by 2030.",
          "Carbon Capture & Storage (CCS): Capturing CO2 from industrial sources and storing it underground.",
          "Electric Vehicles & Public Transport: Reducing transport emissions. EVs produce 50% less CO2 than gasoline cars over their lifetime.",
          "International Agreements: Paris Agreement (2015) — limit warming to 1.5°C. Kyoto Protocol (1997) — first binding emission targets."
        ]
      },
      {
        heading: "Adaptation Measures",
        points: [
          "Climate-Resilient Agriculture: Drought-resistant crops, improved irrigation, and crop diversification.",
          "Coastal Protection: Building sea walls, restoring mangroves, and planned retreat from flood-prone areas.",
          "Early Warning Systems: Better weather forecasting and disaster preparedness to reduce loss of life.",
          "Water Management: Building reservoirs, rainwater harvesting, and desalination to cope with changing rainfall patterns."
        ]
      },
      {
        heading: "Conclusion",
        text: "Global warming is the defining challenge of the 21st century. Without immediate action, global temperatures could rise by 2.7°C by 2100, leading to catastrophic consequences. The transition to renewable energy, coupled with nature-based solutions and international cooperation, offers hope. Every fraction of a degree matters — the difference between 1.5°C and 2°C could save millions of lives and ecosystems."
      }
    ],
    memoryTricks: [
      { title: "1.1°C = 1.1 Trouble", desc: "Already 1.1°C warmer — we feel the heat! Target: 1.5°C max." },
      { title: "CO2 280→420 ppm", desc: "CO2 jumped 50% since industrial era — like filling a room with extra people!" },
      { title: "3.3 mm/year", desc: "Sea rises 3.3 mm/year — small number, BIG problem for coastal cities!" },
      { title: "Paris 1.5°C", desc: "Paris Agreement = 1.5°C limit — remember the city, remember the number!" }
    ]
  },
  {
    id: 9,
    title: "Ozone Layer Effect",
    description: "Ozone depletion, causes, effects, and recovery efforts",
    content: [
      {
        heading: "Introduction",
        text: "The ozone layer is a region in the stratosphere (15-35 km above Earth) containing high concentrations of ozone (O3) molecules. It absorbs 97-99% of the Sun's harmful ultraviolet (UV) radiation. Without it, life on Earth would be impossible. In the 1970s, scientists discovered that human-made chemicals were destroying this protective layer."
      },
      {
        heading: "Ozone Depletion Mechanism",
        points: [
          "Ozone Formation: UV light splits O2 into oxygen atoms (O), which combine with O2 to form O3. This cycle absorbs harmful UV-B and UV-C radiation.",
          "Ozone-Depleting Substances (ODS): CFCs (chlorofluorocarbons), halons, carbon tetrachloride, and methyl chloroform. Used in refrigerators, aerosols, and fire extinguishers.",
          "Catalytic Destruction: One chlorine atom from CFCs can destroy 100,000 ozone molecules. The process is catalytic — the chlorine is released again and again.",
          "Polar Ozone Holes: Extremely cold winter temperatures over Antarctica create polar stratospheric clouds that accelerate ozone destruction. The Antarctic ozone hole reaches maximum size in September-October."
        ]
      },
      {
        heading: "Effects of Ozone Depletion",
        points: [
          "Human Health: Increased skin cancer (melanoma), cataracts, and weakened immune systems. A 1% decrease in ozone increases skin cancer cases by 2-5%.",
          "Agriculture: UV radiation damages crops like wheat, rice, and soybeans. Reduced yields and lower nutritional quality.",
          "Marine Ecosystems: Phytoplankton (base of marine food chains) are sensitive to UV. Their decline affects fish populations and ocean carbon uptake.",
          "Materials Degradation: UV accelerates deterioration of plastics, wood, and rubber. Increased maintenance costs for infrastructure."
        ]
      },
      {
        heading: "Montreal Protocol & Recovery",
        points: [
          "Montreal Protocol (1987): International treaty to phase out ODS. Ratified by all 198 UN members — the most successful environmental treaty ever.",
          "Phase-out Schedule: Developed countries phased out CFCs by 1996; developing countries by 2010. HCFCs are being phased out by 2030.",
          "Recovery Signs: The ozone hole is slowly healing. Full recovery expected by 2060 over Antarctica and 2045 elsewhere. NASA confirms ozone levels are increasing.",
          "Kigali Amendment (2016): Added HFCs (hydrofluorocarbons) to the protocol. HFCs don't directly deplete ozone but are potent greenhouse gases."
        ]
      },
      {
        heading: "India's Role",
        text: "India signed the Montreal Protocol in 1992 and has successfully phased out CFCs, halons, and carbon tetrachloride. The Ozone Cell under the Ministry of Environment coordinates India's compliance. India is on track to phase out HCFCs by 2030. The transition created opportunities for green technology development and energy-efficient cooling."
      },
      {
        heading: "Conclusion",
        text: "The ozone layer story proves that global environmental problems can be solved through science, international cooperation, and policy. The Montreal Protocol prevented an estimated 2 million cases of skin cancer annually by 2030. It serves as a model for addressing climate change — showing that when nations act together, the planet can heal. However, vigilance is needed against illegal ODS trade and new threats."
      }
    ],
    memoryTricks: [
      { title: "O3 = Ozone", desc: "Ozone is O3 — three oxygen atoms, like a protective trio!" },
      { title: "Montreal 1987", desc: "Most successful treaty EVER — all 198 countries agreed! Remember 1987, 198 countries." },
      { title: "1 Cl = 100,000 O3 destroyed", desc: "One chlorine atom is a supervillain destroying 100,000 ozone heroes!" },
      { title: "2060 Recovery", desc: "Antarctic ozone hole heals by 2060 — '2060' = 20 (Ozone) 60 (healed)." }
    ]
  },
  {
    id: 10,
    title: "Solid Waste",
    description: "Types, sources, management, and disposal of solid waste",
    content: [
      {
        heading: "Introduction",
        text: "Solid waste refers to any garbage, refuse, or discarded material from households, industries, agriculture, and institutions. The world generates about 2 billion tonnes of municipal solid waste annually. India produces about 62 million tonnes per year, and this is projected to reach 165 million tonnes by 2030. Improper waste management leads to pollution, disease, and environmental degradation."
      },
      {
        heading: "Types of Solid Waste",
        points: [
          "Municipal Solid Waste (MSW): Household waste, commercial waste, and institutional waste. Includes organic matter (50-60%), paper (10%), plastic (8-10%), glass, metals, and textiles.",
          "Industrial Waste: From manufacturing, mining, and construction. Includes hazardous chemicals, slag, ash, and scrap metal.",
          "Agricultural Waste: Crop residues, animal manure, and agricultural plastics. India generates 500 million tonnes of crop residue annually; much is burned, causing air pollution.",
          "Biomedical Waste: From hospitals and clinics. Includes syringes, bandages, and pathological waste. Requires special handling."
        ]
      },
      {
        heading: "Waste Management Hierarchy",
        points: [
          "Reduce: Minimizing waste generation at the source. The most effective strategy. Examples: using less packaging, buying durable products.",
          "Reuse: Using products multiple times before discarding. Example: reusable bags, refillable containers, donating old clothes.",
          "Recycle: Processing waste materials into new products. Recyclable materials: paper, glass, metals, certain plastics. Saves 70% energy compared to virgin production.",
          "Recover: Extracting energy from waste through incineration or anaerobic digestion.",
          "Dispose: Landfilling as the last resort. Sanitary landfills prevent leachate and methane from escaping."
        ]
      },
      {
        heading: "Waste Disposal Methods",
        points: [
          "Sanitary Landfill: Engineered sites with liners, leachate collection, and methane capture. Waste is compacted and covered daily with soil. Modern landfills have gas-to-energy systems.",
          "Composting: Biological decomposition of organic waste by microorganisms. Produces nutrient-rich soil amendment. Vermicomposting uses earthworms to accelerate decomposition.",
          "Incineration: Burning waste at high temperatures (850-1200°C). Reduces volume by 90% and weight by 75%. Energy can be recovered. Concern: air pollution and toxic ash.",
          "Pyrolysis & Gasification: Thermal decomposition in the absence of oxygen. Produces syngas, bio-oil, and char. Cleaner than incineration."
        ]
      },
      {
        heading: "India's Waste Management",
        points: [
          "Swachh Bharat Mission (2014): Nation-wide cleanliness campaign. Focus on toilet construction, waste segregation, and behavioral change.",
          "Solid Waste Management Rules (2016): Mandates waste segregation at source (wet, dry, hazardous), composting, and ban on plastic below 50 microns.",
          "Waste-to-Energy Plants: Delhi, Hyderabad, and Chennai have plants converting waste to electricity. Challenges: mixed waste reduces efficiency.",
          "Plastic Waste Management Rules (2021): Extended Producer Responsibility (EPR) makes manufacturers responsible for plastic waste collection and recycling."
        ]
      },
      {
        heading: "Conclusion",
        text: "Solid waste management is a growing crisis in urbanizing world. The '3R' principle (Reduce, Reuse, Recycle) is the foundation of sustainable waste management. Circular economy approaches aim to eliminate waste entirely by designing products for reuse and recycling. Individual action — segregating waste, composting, and refusing single-use plastics — combined with strong municipal systems, is essential for clean cities."
      }
    ],
    memoryTricks: [
      { title: "3R = Hierarchy", desc: "Reduce > Reuse > Recycle — in that order! Remember the pyramid." },
      { title: "India 62 MT → 165 MT by 2030", desc: "Waste will nearly TRIPLE by 2030 — time to act NOW!" },
      { title: "Landfill = Last Resort", desc: "Think of landfill as the 'emergency exit' — only use when all else fails." },
      { title: "EPR = Producer Pays", desc: "Extended Producer Responsibility — make the maker responsible!" }
    ]
  },
  {
    id: 11,
    title: "E-Waste",
    description: "Electronic waste sources, hazards, and management strategies",
    content: [
      {
        heading: "Introduction",
        text: "E-waste (electronic waste) refers to discarded electrical and electronic devices: computers, phones, TVs, batteries, and appliances. The world generates about 53 million tonnes of e-waste annually (2023). India is the third-largest e-waste producer after China and the USA, generating about 3.2 million tonnes. E-waste is the fastest-growing waste stream globally, growing 3-5% per year."
      },
      {
        heading: "Sources of E-Waste",
        points: [
          "Information Technology: Computers, laptops, servers, printers, and networking equipment. Rapid technological obsolescence creates massive waste.",
          "Consumer Electronics: TVs, mobile phones, cameras, and audio devices. Average smartphone lifespan is 2-3 years.",
          "Household Appliances: Refrigerators, washing machines, microwaves, and air conditioners. 'White goods' contain refrigerants and insulating foams.",
          "Industrial Electronics: Medical equipment, control systems, and laboratory instruments. Often contain precious metals and hazardous components."
        ]
      },
      {
        heading: "Hazardous Components in E-Waste",
        points: [
          "Lead: Found in CRT monitors and solder. Causes neurological damage, especially in children. One CRT monitor contains 1-2 kg of lead.",
          "Mercury: Found in LCD backlights, switches, and batteries. Toxic to the nervous system and accumulates in fish.",
          "Cadmium: Found in rechargeable batteries and some semiconductors. Causes kidney damage and is carcinogenic.",
          "Brominated Flame Retardants (BFRs): Added to plastics to prevent fire. Disrupt thyroid hormones and are persistent in the environment.",
          "Arsenic, Barium, Beryllium: Present in various components. All are toxic to humans and ecosystems."
        ]
      },
      {
        heading: "Health & Environmental Impacts",
        points: [
          "Informal Recycling: In India, 95% of e-waste is processed informally in places like Seelampur (Delhi). Workers burn circuit boards, acid-strip metals, and inhale toxic fumes without protection.",
          "Soil & Water Pollution: Leaching of heavy metals into groundwater contaminates drinking water. Affects agriculture and local communities.",
          "Health Effects: Respiratory diseases, skin disorders, kidney damage, neurological problems, and increased cancer risk. Children and pregnant women are most vulnerable.",
          "Air Pollution: Burning e-waste releases dioxins and furans — highly toxic compounds that persist in the environment."
        ]
      },
      {
        heading: "E-Waste Management Strategies",
        points: [
          "Extended Producer Responsibility (EPR): Manufacturers are responsible for collecting and recycling their products. India's E-Waste Rules (2022) mandate EPR with targets.",
          "Formal Recycling Facilities: Authorized dismantlers and recyclers use safe methods. India has ~500 authorized recyclers.",
          "Urban Mining: Recovering precious metals (gold, silver, copper, palladium) from e-waste. One tonne of mobile phones contains 200g gold — richer than gold ore.",
          "Design for Environment: Manufacturing products that are easier to repair, upgrade, and recycle. Right to Repair movements are gaining momentum.",
          "Awareness & Collection: Setting up e-waste collection centers, buy-back programs, and public awareness campaigns."
        ]
      },
      {
        heading: "Conclusion",
        text: "E-waste is both a challenge and an opportunity. If managed properly, it is a valuable source of metals (urban mining). If mismanaged, it becomes a toxic threat to health and environment. The transition from informal to formal recycling, combined with EPR, design for recycling, and public awareness, is essential. Consumers can help by extending product life, choosing repairable products, and using authorized e-waste collection points."
      }
    ],
    memoryTricks: [
      { title: "53 Million Tonnes", desc: "World produces 53 million tonnes e-waste/year — imagine a mountain of dead phones!" },
      { title: "India = #3", desc: "India is 3rd largest e-waste producer — China, USA, then India." },
      { title: "Urban Mining", desc: "1 tonne phones = 200g gold — e-waste is richer than gold mines!" },
      { title: "95% Informal in India", desc: "Only 5% formally recycled — 95% handled dangerously by informal workers." }
    ]
  },
  {
    id: 12,
    title: "Greenhouse Effect",
    description: "Mechanism, gases, and consequences of the greenhouse effect",
    content: [
      {
        heading: "Introduction",
        text: "The greenhouse effect is a natural process where certain gases in Earth's atmosphere trap heat from the Sun, keeping the planet warm enough for life. Without it, Earth's average temperature would be -18°C instead of +15°C. However, human activities have enhanced this effect, leading to global warming. The concept was first described by Joseph Fourier in 1824 and experimentally verified by John Tyndall in 1859."
      },
      {
        heading: "Natural Greenhouse Effect",
        points: [
          "Solar Radiation: Sun emits shortwave radiation (visible light, UV). About 30% is reflected by clouds, ice, and atmosphere. 70% reaches Earth's surface.",
          "Absorption & Re-radiation: Earth's surface absorbs solar energy and re-radiates it as longwave infrared (heat) radiation.",
          "Trapping by GHGs: Greenhouse gases absorb infrared radiation and re-emit it in all directions, including back toward Earth. This warms the surface and lower atmosphere.",
          "Key Natural GHGs: Water vapor (most abundant), CO2, methane, and nitrous oxide. These gases make life possible."
        ]
      },
      {
        heading: "Enhanced Greenhouse Effect (Human-caused)",
        points: [
          "Burning Fossil Fuels: Coal, oil, and natural gas release CO2 stored underground for millions of years. This is the largest source of emissions.",
          "Deforestation: Trees store carbon. Cutting and burning them releases CO2. Reduces the planet's ability to absorb CO2.",
          "Agriculture: Rice paddies produce methane; livestock produce methane through digestion; fertilizers emit nitrous oxide.",
          "Industrial Processes: Cement production releases CO2 from limestone. Refrigerants and aerosols release CFCs and HFCs.",
          "Waste: Landfills produce methane from decomposing organic matter. Wastewater treatment also releases greenhouse gases."
        ]
      },
      {
        heading: "Major Greenhouse Gases",
        points: [
          "Carbon Dioxide (CO2): 76% of global GHG emissions. Stays in atmosphere for 300-1000 years. Main source: fossil fuel combustion and deforestation.",
          "Methane (CH4): 16% of emissions. 28-80x more potent than CO2 over 20 years. Sources: livestock, rice paddies, landfills, and fossil fuel extraction. Stays ~12 years.",
          "Nitrous Oxide (N2O): 6% of emissions. 265x more potent than CO2. Sources: fertilizers, industrial processes, and burning fossil fuels. Stays ~120 years.",
          "Fluorinated Gases: 2% of emissions. Includes HFCs, PFCs, SF6. Thousands of times more potent than CO2. Used in refrigeration, air conditioning, and electronics."
        ]
      },
      {
        heading: "Consequences of Enhanced Greenhouse Effect",
        points: [
          "Global Temperature Rise: Average temperature increased 1.1°C since pre-industrial times. Projected 2-4°C by 2100 under high-emission scenarios.",
          "Melting Ice & Rising Seas: Thermal expansion and ice melt raise sea levels. Coastal cities and island nations face existential threats.",
          "Extreme Weather: More intense heatwaves, droughts, floods, and storms. Climate change makes rare events more frequent.",
          "Ecosystem Disruption: Shifting seasons, changing rainfall patterns, and ocean acidification stress plants and animals. Coral reefs are particularly vulnerable."
        ]
      },
      {
        heading: "Conclusion",
        text: "The greenhouse effect is essential for life, but the enhanced greenhouse effect is driving dangerous climate change. Reducing emissions requires transitioning to renewable energy, protecting forests, improving agriculture, and adopting sustainable consumption. Every action counts — from individual choices to national policies. The window to limit warming to 1.5°C is narrowing, but the solutions exist. Political will and collective action are the deciding factors."
      }
    ],
    memoryTricks: [
      { title: "-18°C vs +15°C", desc: "Without GHGs: -18°C (frozen). With GHGs: +15°C (comfortable). GHGs are our blanket!" },
      { title: "CO2 = 76%", desc: "CO2 is the BIGGEST villain — 76% of GHG emissions. Cut CO2, cut warming!" },
      { title: "CH4 = 28x Stronger", desc: "Methane is 28x stronger than CO2 — cow burps are surprisingly powerful!" },
      { title: "Fourier 1824", desc: "Fourier discovered greenhouse effect in 1824 — almost 200 years of warning!" }
    ]
  },
  {
    id: 13,
    title: "EIA",
    description: "Environmental Impact Assessment process and significance",
    content: [
      {
        heading: "Introduction",
        text: "Environmental Impact Assessment (EIA) is a systematic process to evaluate the environmental, social, and economic impacts of a proposed project before decisions are made. It ensures that development is sustainable and environmental costs are minimized. The concept originated in the USA with the National Environmental Policy Act (NEPA) of 1969. India made EIA mandatory in 1994 under the Environment Protection Act (1986)."
      },
      {
        heading: "Objectives of EIA",
        points: [
          "Predict Impacts: Forecast the environmental consequences of a project during planning, construction, operation, and decommissioning phases.",
          "Minimize Adverse Effects: Design mitigation measures to reduce negative impacts. Example: building wildlife corridors near highways.",
          "Compare Alternatives: Evaluate different project locations, designs, and technologies to choose the least harmful option.",
          "Inform Decision-Making: Provide decision-makers and the public with clear information about environmental trade-offs.",
          "Ensure Compliance: Verify that projects follow environmental laws and regulations throughout their lifecycle."
        ]
      },
      {
        heading: "EIA Process Stages",
        points: [
          "Screening: Determine whether a project requires a full EIA or a simpler assessment. Based on project size, location, and potential impact. Category A (national level) and Category B (state level) in India.",
          "Scoping: Identify the key issues, impacts, and alternatives to be studied. Stakeholders and experts provide input. Results in Terms of Reference (ToR).",
          "Baseline Study: Collect data on existing environmental conditions (air, water, soil, biodiversity, noise) before the project begins.",
          "Impact Prediction & Assessment: Predict impacts using models, checklists, matrices, and expert judgment. Evaluate significance.",
          "Mitigation Measures: Propose actions to avoid, reduce, remedy, or compensate for adverse impacts. Example: afforestation for lost forest land.",
          "Preparation of EIS/EMP: Environmental Impact Statement (EIS) documents findings. Environmental Management Plan (EMP) outlines monitoring and mitigation.",
          "Public Hearing: Mandatory in India since 1997. Local communities can voice concerns and suggest alternatives. Ensures transparency.",
          "Decision & Clearance: Regulatory authority (MoEFCC in India) grants or rejects Environmental Clearance (EC). Conditions may be attached.",
          "Monitoring & Auditing: Post-project monitoring ensures compliance with EC conditions and EMP. Third-party audits verify effectiveness."
        ]
      },
      {
        heading: "EIA Methods",
        points: [
          "Checklists: Simple lists of potential impacts to ensure nothing is missed. Ad-hoc checklists are project-specific; generic checklists apply broadly.",
          "Matrices: Cross-reference project activities with environmental components (Leopold Matrix). Shows cause-effect relationships.",
          "Overlays: Map different environmental factors (vegetation, soil, water) on transparent sheets to identify sensitive areas. GIS has replaced physical overlays.",
          "Network Analysis: Traces secondary and tertiary impacts from primary actions. Useful for complex projects with cascading effects.",
          "Modeling & Simulation: Mathematical models predict air quality, water pollution, noise spread, and ecological changes."
        ]
      },
      {
        heading: "Challenges & Criticisms",
        points: [
          "Political & Economic Pressure: Projects are often approved despite significant environmental concerns due to economic interests.",
          "Inadequate Baseline Data: Many EIAs lack sufficient pre-project data, leading to inaccurate impact predictions.",
          "Weak Public Participation: Public hearings are sometimes rushed, conducted far from affected communities, or dominated by project proponents.",
          "Post-clearance Monitoring: Often neglected after construction begins. Lack of enforcement makes EMPs ineffective.",
          "Climate Change: Traditional EIAs often ignore cumulative impacts and climate vulnerability, focusing only on direct project effects."
        ]
      },
      {
        heading: "Conclusion",
        text: "EIA is a powerful tool for sustainable development, but its effectiveness depends on rigorous implementation, genuine public participation, and strong enforcement. The EIA Notification 2020 in India proposed controversial changes (reduced public consultation, post-facto clearance), which were criticized by environmental groups. Strengthening EIA processes, not weakening them, is essential for balancing development with environmental protection in the 21st century."
      }
    ],
    memoryTricks: [
      { title: "S-S-B-I-M-E-P-D-M", desc: "Screening, Scoping, Baseline, Impact, Mitigation, EIS, Public, Decision, Monitoring — 9 steps!" },
      { title: "NEPA 1969", desc: "USA started EIA in 1969 — India made it mandatory in 1994." },
      { title: "Public Hearing = Voice of People", desc: "Since 1997, public MUST be heard — democracy in environment!" },
      { title: "ToR = Terms of Reference", desc: "Scoping produces ToR — like an exam syllabus for the EIA study." }
    ]
  },
  {
    id: 14,
    title: "Air Act",
    description: "Air (Prevention and Control of Pollution) Act 1981",
    content: [
      {
        heading: "Introduction",
        text: "The Air (Prevention and Control of Pollution) Act was enacted by the Indian Parliament in 1981 and amended in 1987. It was India's first comprehensive legislation specifically addressing air pollution, following the Stockholm Conference (1972) and India's constitutional mandate under Article 48A and 51A(g) for environmental protection. The Act provides the framework for controlling air pollution from industries, vehicles, and other sources."
      },
      {
        heading: "Objectives of the Air Act",
        points: [
          "Prevention of Air Pollution: Prohibit activities that cause or worsen air pollution. Focus on industrial, vehicular, and domestic sources.",
          "Control of Air Pollution: Establish mechanisms to monitor, regulate, and reduce emissions. Set standards for air quality and emissions.",
          "Establishment of Regulatory Bodies: Create Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs) for implementation.",
          "Coordination: Enable cooperation between central and state governments, and between different states for air pollution management."
        ]
      },
      {
        heading: "Key Provisions",
        points: [
          "Pollution Control Boards: CPCB (central) and SPCBs (state) are responsible for monitoring air quality, enforcing standards, issuing directions, and prosecuting violators.",
          "Air Quality Standards: National Ambient Air Quality Standards (NAAQS) set limits for pollutants like SO2, NO2, PM2.5, PM10, O3, CO, and lead. Revised in 2009 and 2022.",
          "Consent Mechanism: Industries must obtain Consent to Establish (CTE) before setup and Consent to Operate (CTO) before production. These are renewed periodically with conditions.",
          "Emission Standards: Specific limits for different industries (cement, power plants, steel, etc.). Standards become stricter over time.",
          "Power to Enter & Inspect: SPCB officers can inspect premises, take samples, and examine records. Non-compliance leads to penalties."
        ]
      },
      {
        heading: "Penalties & Enforcement",
        points: [
          "Penalties for Non-compliance: Violation of standards or operating without consent can result in imprisonment up to 6 years and/or fines up to Rs. 10,000 per day of violation (after 1987 amendment).",
          "Closure Orders: SPCBs can order closure of polluting industries or stoppage of electricity/water supply.",
          "Criminal Liability: Company officers can be held personally liable for pollution offenses. This prevents hiding behind corporate structures.",
          "Citizen Suits: The Act allows citizens to approach courts for enforcement, strengthening public participation."
        ]
      },
      {
        heading: "Significant Amendments & Cases",
        points: [
          "1987 Amendment: Introduced stricter penalties, including imprisonment for up to 6 years and higher fines. Added provisions for noise pollution control.",
          "Bhopal Gas Tragedy (1984): Led to the Environment Protection Act (1986) and strengthened industrial safety. The Air Act was amended to include hazardous substances.",
          "Delhi Air Quality Crisis: The Supreme Court and NGT have used the Air Act to mandate CNG conversion, ban old diesel vehicles, and control construction dust in Delhi-NCR.",
          "National Clean Air Programme (NCAP): Launched in 2019 to reduce PM levels by 20-30% in 131 non-attainment cities by 2024. Uses the Air Act as legal basis."
        ]
      },
      {
        heading: "Conclusion",
        text: "The Air Act 1981 was pioneering legislation for its time. However, India's air quality remains among the worst globally, with 22 of the world's 30 most polluted cities. The Act needs stronger enforcement, better monitoring infrastructure, and integration with climate policies. Recent moves like NCAP, GRAP (Graded Response Action Plan) for Delhi, and the shift to EVs show progress. But ultimately, the Air Act's success depends on political will, public awareness, and strict enforcement against polluters."
      }
    ],
    memoryTricks: [
      { title: "1981 = Air Act Born", desc: "Air Act was born in 1981 — remember: air = 1 breath, 1981 = one-eight-one." },
      { title: "CPCB + SPCB", desc: "Central and State Pollution Control Boards — C for Central, S for State." },
      { title: "CTE + CTO", desc: "Consent to Establish + Consent to Operate — Establish first, then Operate!" },
      { title: "6 Years Jail", desc: "1987 amendment made it 6 years max — '86 + 1 = 6 years' (not exact, but memorable!)" }
    ]
  },
  {
    id: 15,
    title: "Natural Environment Policy",
    description: "National policy frameworks for environmental protection and sustainable development",
    content: [
      {
        heading: "Introduction",
        text: "National Environment Policy refers to the government's framework for environmental protection, conservation, and sustainable development. In India, the National Environment Policy (NEP) 2006 is the overarching document. It was developed to meet the challenges of rapid economic growth, population pressure, and environmental degradation. The policy integrates environmental concerns into all sectors of development."
      },
      {
        heading: "Objectives of National Environment Policy",
        points: [
          "Conservation of Critical Resources: Protect forests, water, biodiversity, and soil — the life-support systems of the country.",
          "Integration with Development: Ensure that economic development does not come at the cost of environmental health. 'Green GDP' concept.",
          "Equity & Social Justice: Protect livelihoods of communities dependent on natural resources. Ensure fair access to environmental benefits.",
          "International Cooperation: Meet international commitments (CBD, UNFCCC, SDGs) while addressing India's development needs.",
          "Environmental Governance: Strengthen institutions, improve enforcement, and increase public participation in environmental decision-making."
        ]
      },
      {
        heading: "Key Strategies & Programs",
        points: [
          "National Action Plan on Climate Change (NAPCC): 8 missions including Solar Mission, Energy Efficiency Mission, Green India Mission, and Sustainable Agriculture Mission. Launched in 2008.",
          "National Biodiversity Action Plan (NBAP): Aligns with CBD objectives. Focuses on conservation, sustainable use, and benefit sharing.",
          "National Forest Policy (NFP) 1988: Aims for 33% forest cover (only ~24% achieved). Emphasizes people's participation in forest management.",
          "National Water Policy 2012: Focuses on water conservation, rainwater harvesting, river basin management, and equitable distribution.",
          "National Mission for Clean Ganga (Namami Gange): Comprehensive program for Ganga rejuvenation with sewage treatment, afforestation, and industrial pollution control."
        ]
      },
      {
        heading: "Sustainable Development Principles",
        points: [
          "Intergenerational Equity: Present generations must not compromise the ability of future generations to meet their needs. From the Brundtland Report (1987).",
          "Precautionary Principle: Where there are threats of serious environmental damage, lack of full scientific certainty should not be used to postpone cost-effective preventive measures.",
          "Polluter Pays Principle: The polluter should bear the cost of pollution prevention and remediation. Used by courts in India for environmental compensation.",
          "Public Trust Doctrine: Natural resources are held by the state in trust for the public. The state cannot allow private entities to destroy them."
        ]
      },
      {
        heading: "Institutional Framework",
        points: [
          "Ministry of Environment, Forest and Climate Change (MoEFCC): Central ministry for environmental governance, policy, and regulation.",
          "National Green Tribunal (NGT): Established in 2010. Fast-track environmental justice. Handles cases related to air, water, forests, and biodiversity.",
          "Central Pollution Control Board (CPCB): Technical arm for monitoring pollution, setting standards, and advising government.",
          "National Biodiversity Authority (NBA): Implements the Biological Diversity Act (2002). Manages Access and Benefit Sharing (ABS).",
          "State Forest Departments & Pollution Control Boards: Implement central policies at the state level."
        ]
      },
      {
        heading: "Conclusion",
        text: "National environment policy is the backbone of sustainable development. India's NEP 2006, along with NAPCC, NFP, and various missions, provides a comprehensive framework. However, implementation gaps remain — weak enforcement, insufficient funding, and conflict between development and conservation. The future lies in strengthening environmental governance, integrating traditional ecological knowledge, and building climate-resilient communities. As the Brundtland Report stated, sustainable development meets the needs of the present without compromising the ability of future generations to meet their own needs."
      }
    ],
    memoryTricks: [
      { title: "NEP 2006", desc: "National Environment Policy 2006 — the umbrella policy covering everything." },
      { title: "NAPCC = 8 Missions", desc: "National Action Plan on Climate Change has 8 missions — think of 8 directions on a compass!" },
      { title: "3 Principles", desc: "Intergenerational Equity, Precautionary, Polluter Pays — IPP (easy to remember)." },
      { title: "NGT 2010", desc: "National Green Tribunal — 'Green Court' started in 2010 for fast environmental justice." }
    ]
  }
];

export function getTopicById(id) {
  return topics.find(t => t.id === id);
}

export function getAllTopics() {
  return topics;
}
