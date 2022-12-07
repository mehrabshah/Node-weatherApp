#include <stdio.h>
#include<string.h>
int main()
{
 FILE *fp;
 char buff[255];
 char buff2[255];
 fp = fopen("myf.txt", "r");
 int index=0;
char a='\0';
 while(a=fgetc(  fp ))
 {
 if(a==EOF){
 buff[index]='\0';
 break;
 }
 else
   buff[index++]=a;
}
 size_t size = strlen(buff);
 fclose(fp);
 index=0;
  FILE *fp2 = fopen("newf2.txt", "a");
  while(index<=size)
  {
  int index2=index;
  int flag=1;
      if(buff[index]==' ' || buff[index]=='\0')
      {
      index--;
      while(buff[index]!=' ' && index>=0)
      {
		    if((buff[index]>=97 && buff[index]<=122) || (buff[index]>=65 && buff[index]<=90))
		    {
		      flag=0;
		      break;
		    }
		    index--;
      }
      
		  if(flag==1)
		  {
              index++;
		      printf("\nsomething here: ");
			   while(buff[index]!=' ')
			   {
			   fputc( buff[index++], fp2 );
               printf("\nnon-character: %c",buff[index-1]);
			   
			   }
			   fputc(' ', fp2);
		   }
		   
		  index=index2+1;
      }
     else
     index++;
  }
 return 0;
}