+++
title = 'Barcelona Declaration on Open Research Information'
date = 2026-07-10T00:00:00+08:00
comments = false

+++

# Amazing tables
{{< rawhtml >}}
<hr class="small">
{{< /rawhtml >}}

Test table display
*shortcode 1 from local csv)* 

{{< csv_to_table_simple file="/data/hugo_test.csv" title="Test 1" >}}


Test table display 2
*shortcode 2 from local csv)* 

{{< csv_to_table_advanced path="/data/hugo_test_2.csv" caption="Test 2" >}}


Test table display 3
*shortcode 2 from external csv (Google Sheets))* 

{{< csv_to_table_advanced path="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOUVNmcLIL9kFH9YptCuOiJAFi5ZzHBddmQrrkzYFbR8c-ii4aW3SS66I5sYKmYysLsi7S3yRfDjy8/pub?gid=826489877&single=true&output=csv" caption="Test 3" >}}
