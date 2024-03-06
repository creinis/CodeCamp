# criar um novo projeto .net compilável
dotnet new console -n GradesAverageApp
dotnet new console -o ./ProjectName

# compile and build output project
dotnet build

# run your program
dotnet run

# running an specific file
dotnet tool install -g dotnet-script

dotnet script file_name.cs

