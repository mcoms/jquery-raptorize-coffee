task :default => [:build]

desc "Compile and Uglify the JS into the build directory."
task build: [:compile, :uglify] 

desc "Compile the JS into the build directory."
task :compile do
  sh "coffee --compile --output build/ jquery-raptorize.coffee"
end

desc "Uglify the compiled JS in the build directory."
task :uglify do
  sh "uglifyjs --comments /license/ --mangle --compress --output build/jquery-raptorize.min.js build/jquery-raptorize.js"
end