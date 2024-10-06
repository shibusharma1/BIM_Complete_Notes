# Opening file and reading the content
fo=open("myfile.txt","r")
fo_new = open("files/file1.txt","r")
fo_text = open("myfile.txt","rt")

# Reading File Content
print(fo.readline())
print(fo.read(10))
print(fo_new.read(10))
print(fo_text.read(10))
