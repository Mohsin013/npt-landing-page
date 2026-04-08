#!/usr/bin/env node

/**
 * Bundle Size Analyzer
 *
 * Run this script to analyze your bundle size and identify optimization opportunities.
 *
 * Usage:
 *   node analyze-bundle.js
 *
 * Requirements:
 *   - Build your app first: npm run build
 *   - This script analyzes the .next/static/chunks directory
 */

const fs = require('fs');
const path = require('path');

const NEXT_DIR = path.join(process.cwd(), '.next', 'static', 'chunks');

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function analyzeBundle() {
  console.log('\n📊 Bundle Size Analysis\n');

  if (!fs.existsSync(NEXT_DIR)) {
    console.log('❌ Error: .next/static/chunks directory not found.');
    console.log('   Please run: npm run build\n');
    process.exit(1);
  }

  const files = fs.readdirSync(NEXT_DIR);
  let totalSize = 0;
  const fileSizes = [];

  files.forEach((file) => {
    const filePath = path.join(NEXT_DIR, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    totalSize += size;

    // Categorize files
    let category = 'other';
    if (file.includes('three')) category = 'Three.js';
    else if (file.includes('react') || file.includes('react-dom')) category = 'React';
    else if (file.includes('vendor')) category = 'Vendor';
    else if (file.includes('ui')) category = 'UI Components';
    else if (file.includes('page')) category = 'Pages';

    fileSizes.push({
      name: file,
      size,
      formattedSize: formatBytes(size),
      category,
    });
  });

  // Sort by size
  fileSizes.sort((a, b) => b.size - a.size);

  // Print summary
  console.log('📦 Total Bundle Size:', formatBytes(totalSize), '\n');

  // Print largest files
  console.log('🔝 Largest Files (Top 10):');
  console.log('─'.repeat(80));
  fileSizes.slice(0, 10).forEach((file, index) => {
    const bar = '█'.repeat(Math.min(50, Math.floor(file.size / 1024)));
    console.log(
      `${index + 1}. ${file.name.padEnd(40)} ${file.formattedSize.padStart(10)} ${bar}`
    );
  });

  // Print by category
  console.log('\n📂 By Category:');
  console.log('─'.repeat(80));
  const categories = {};
  fileSizes.forEach((file) => {
    if (!categories[file.category]) {
      categories[file.category] = 0;
    }
    categories[file.category] += file.size;
  });

  Object.entries(categories)
    .sort(([, a], [, b]) => b - a)
    .forEach(([category, size]) => {
      const percentage = ((size / totalSize) * 100).toFixed(1);
      console.log(
        `${category.padEnd(20)} ${formatBytes(size).padStart(10)} (${percentage}%)`
      );
    });

  // Recommendations
  console.log('\n💡 Optimization Recommendations:');
  console.log('─'.repeat(80));

  const threeJSSize = categories['Three.js'] || 0;
  const vendorSize = categories['Vendor'] || 0;

  if (threeJSSize > 1024 * 1024) {
    console.log('⚠️  Three.js is large (> 1MB):');
    console.log('   - Consider code splitting and lazy loading 3D components');
    console.log('   - Use device detection to skip 3D on low-end devices');
    console.log('   - Consider using lightweight alternatives for simple animations');
  }

  if (vendorSize > 500 * 1024) {
    console.log('⚠️  Vendor bundle is large (> 500KB):');
    console.log('   - Review dependencies and remove unused packages');
    console.log('   - Consider tree-shaking and import optimization');
    console.log('   - Use dynamic imports for non-essential libraries');
  }

  if (totalSize > 2 * 1024 * 1024) {
    console.log('⚠️  Total bundle is large (> 2MB):');
    console.log('   - Implement route-based code splitting');
    console.log('   - Use Next.js Image component for all images');
    console.log('   - Optimize font loading');
    console.log('   - Consider server components for static content');
  }

  console.log('\n✅ Analysis complete!\n');
}

// Run analysis
analyzeBundle();
