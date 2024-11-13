<!DOCTYPE html>
<html lang="en">

<head>
   <?php include("includes/compatibility.php"); ?>
   <?php include("includes/var.php"); ?>
   <meta name="description" content="...">
   <title>Degrees Celcius | ...</title>
   <?php include("includes/style.php"); ?>
</head>

<body>
   <?php include("includes/header.php"); ?>

   <section class="comicSection1">
      <div class="container">
         <div class="row">
            <div class="col-md-6">
               <div class="comicSec-img">
                  <img src="assets/images/comic/sec1/img1.jpg" alt="Comics">
               </div>
            </div>

            <div class="col-md-6">
               <div class="comicSec-cont">
                  <span class="fs-xs">
                     <em>18+</em>
                     Romance · Drama
                  </span>

                  <h4 class="fs-lg">COMIC NAME</h4>

                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type .</p>

                  <div class="comicSec-chapters">
                     <h5 class="fs-md">Chapters</h5>

                     <ul>
                        <li class="active">
                           <div class="img">
                              <img src="assets/images/comic/sec1/chapter1.jpg" alt="Chapter #1 Icon">
                           </div>

                           <div class="cont">
                              <h6>Chapter 1</h6>
                              <span>Nov 16, 2020</span>
                           </div>
                        </li>

                        <li>
                           <div class="img">
                              <img src="assets/images/comic/sec1/chapter2.jpg" alt="Chapter #2 Icon">
                           </div>

                           <div class="cont">
                              <h6>Chapter 2</h6>
                              <span>Dec 16, 2020</span>
                           </div>
                        </li>
                     </ul>
                  </div>

                  <div class="comicSec-tags">
                     <h5 class="fs-md">Tags</h5>

                     <ul>
                        <li><a href="#">Romance</a></li>
                        <li><a href="#">Drama</a></li>
                        <li><a href="#">Slice of Life</a></li>
                        <li><a href="#">Angst</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Coming of age</a></li>
                        <li><a href="#">First love</a></li>
                        <li><a href="#">Childhood friends</a></li>
                        <li><a href="#">Double identity</a></li>
                        <li><a href="#">Lovey dovey</a></li>
                        <li><a href="#">Completed</a></li>
                        <li><a href="#">Gem Only</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>


         <div class="chapter-viewArea">
            <?php 
               for ($i=1; $i < 15; $i++) { 
                  # code...
            ?>

            <div class="chapter-img">
               <a href="assets/images/comic/sec1/chapter1/<?php echo $i; ?>.jpg" data-fancybox='chapter #1'>
                  <img src="assets/images/comic/sec1/chapter1/<?php echo $i; ?>.jpg" alt="Page <?php echo $i; ?>">
               </a>
            </div>
            <?php } ?>


         </div>
      </div>
   </section>


   <?php include("includes/footer.php"); ?>
   <?php include("includes/scripts.php"); ?>
</body>

</html>