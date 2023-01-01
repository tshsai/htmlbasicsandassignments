class shape:
    def area(self):
        print("caluculating area")
class circle(shape):
    def area(self,radius):
        print(3.14*radius*radius)
class rectangle(shape):
    def area(self,length,breadth):
        print(length*breadth)
class square(shape):
    def area(self,side):
        print(side*side)
obj1=circle()
obj1.area(5)
obj2=rectangle()
obj2.area(5,10)
obj3=square()
obj3.area(5)
