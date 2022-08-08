// instantiate teachers
var Eversole = new Teacher('Eversole', '#');
var Meekey = new Teacher('Meekey', '#');
var Pait = new Teacher('Pait', '#');
var Reckerd = new Teacher('Reckerd', '#');
var Roberts = new Teacher('Roberts', '#');
var Arnold = new Teacher('Arnold', '#');

var Brunton = new Teacher('Brunton', '#');
var Buzzee = new Teacher('Buzzee', '#');
var Hill = new Teacher('Hill', '#');
var Jellis = new Teacher('Jellis', '#');
var Krause = new Teacher('Krause', '#');
var Lampert = new Teacher('Lampert', '#');

var Bellissimo = new Teacher('Bellissimo', '#');
var McCheyne = new Teacher('McCheyne', '#');
var Musick = new Teacher('Musick', '#');
var Rowe = new Teacher('Rowe', '#');
var Winters = new Teacher('Winters', '#');

var Castillo = new Teacher('Castillo', '#');
var Kemp = new Teacher('Kemp', '#');
var Mattes = new Teacher('Mattes', '#');
var Navarro = new Teacher('Navarro', '#');
var Stroud = new Teacher('Stroud', '#');

var Ball = new Teacher('Ball', '#');
var Bleiweis = new Teacher('Bleiweis', '#');
var Jackson = new Teacher('Jackson', '#');
var Travis = new Teacher('Travis', '#');
var Vanderhill = new Teacher('Vanderhill', '#');

var Johnson = new Teacher('Johnson', '#');
var Kasberg = new Teacher('Kasberg', '#');
var Stevens = new Teacher('Stevens', '#');
var Lucero = new Teacher('Lucero', '#');
var Renfro = new Teacher('Renfro', '#');

// instantiate plcs
var MathGrade8 = new PLC([Eversole, Meekey, Pait, Reckerd, Roberts, Vacant], 'Eight Grade Math');
var MathGrade7 = new PLC([Bellissimo, McCheyne, Musick, Rowe, Winters], 'Seventh Grade Math');
var MathGrade6 = new PLC([Arnold, Bleiweis, Jackson, Travis, Vanderhill], 'Sixth Grade Math');

var ELAGrade8 = new PLC([Brunton, Buzzee, Hill, Jellis, Krause, Lampert], 'Eigth Grade ELA');
var ELAGrade7 = new PLC([Castillo, Kemp, Mattes, Navarro, Stroud], 'Seventh Grade ELA');
var ELAGrade6 = new PLC([Johnson, Kasberg, Stevens, Lucero, Renfro], 'Sixth Grade ELA');

// instantiate grade levels
var EigthGradeTeachers = new Grade([MathGrade8, ELAGrade8], 'Eigth Grade');
var SeventhGradeTeachers = new Grade([MathGrade7, ELAGrade7], 'Seventh Grade');
var SixthGradeTeachers = new Grade([MathGrade6, ELAGrade8], 'Sixth Grade');

// instantiate departments
var MathDepartment = new Department([MathGrade8, MathGrade7, MathGrade6], 'Math Department');
var ELADepartment = new Department([ELAGrade8, ELAGrade7, ELAGrade6], 'ELA Department');

// instantiate school
var JMR = new School([MathDepartment, ELADepartment])
