The Access to Indicators project uses AURIN (Australian Urban Research Infrastructure Network) funding to build, test and to integrate four e-research tools into the AURIN online research infrastructure and make it available for urban researchers, state government, and local or state government professionals, to use and apply the tools and methodology more widely. 
The four e-research tools the project proposes to integrate into the AURIN e-infrastructure will use existing spatial data sets (Vicmap and Australian Bureau of Statistics Census) made available through the AURIN portal to generate, online through the AURIN portal four indicators the following indices:  Infrastructure availability, proximity, service accessibility, ¡®unrealised potential quotient¡¯. 
The Access to Services indicator project is essentially a fifth demonstrator project for the AURIN/ANDS (Australian National Data Service).
The project is a partnership between the government, private and the university/research sectors. The project partners are the City of Melbourne, City Research Branch, Hassell, Centre for Spatial Data Infrastructures and Land Administration (CSDILA) and McCaughey VicHealth Centre for Community Wellbeing.

For more information, please concact Dr Benny Chen (yiqun.c@unimelb.edu.au)


v1.4:
(1) gray out zero population MBs in IIA output

v1.3:
(1) IIA is computed by respecting the size of meshblock, rather than the previously defined Max Quantity
(2) add a buffer size to LGA (500m default) to bring more adjacent facilities into computation

v1.2:
(1) add an option for ranking iia/upg among all LGAs
(2) basicLayerGrid 'markDirty' set to false to prevent the "red triangle/corner" in the changed cell
(3) bug fix: when cleanLoadLayers called, the simpanelgrid cannot expand normally
(4) add legend

v1.1: 
(1) add buffer size for LGA in IOP 
(2) add 'gardens' in park layer
(3) enable user login, small UI improvements
(4) iop UI supports more layers
(5) add a clean loaded layers button