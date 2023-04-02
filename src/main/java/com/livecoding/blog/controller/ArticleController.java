package com.livecoding.blog.controller;

import com.livecoding.blog.entity.Article;
import com.livecoding.blog.entity.Category;
import com.livecoding.blog.repository.ArticleRepository;
import com.livecoding.blog.repository.CategoryRepository;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class ArticleController {
    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("articles")
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    @GetMapping("articles/{id}")
    public Article getArticle(@PathVariable Long id) {
        return articleRepository.findById(id).get();
    }

    @GetMapping("categories/{categoryId}/articles")
    public List<Article> getArticlesByCategoryId(@PathVariable Long categoryId) {
        return articleRepository.findByCategoryId(categoryId);
    }

    @PostMapping("categories/{categoryId}/articles")
    public Article createArticle(@PathVariable Long categoryId, @RequestBody Article article) {
        Category categoryToUse = categoryRepository.findById(categoryId).get();
        article.setCategory(categoryToUse);
        return articleRepository.save(article);
    }

    @PutMapping("categories/{categoryId}/articles/{articleId}")
    public Article updateArticle(@PathVariable Long articleId, @PathVariable Long categoryId, @RequestBody Article body) {
        Article articleToUpdate = articleRepository.findById(articleId).get();
        Category categoryToUse = categoryRepository.findById(categoryId).get();
        articleToUpdate.setTitle(body.getTitle());
        articleToUpdate.setContent(body.getContent());
        articleToUpdate.setSlug(body.getSlug());
        articleToUpdate.setCategory(categoryToUse);

        return articleRepository.save(articleToUpdate);
    }

    @DeleteMapping("articles/{id}")
    public boolean deleteArticle(@PathVariable Long id) {
        articleRepository.deleteById(id);
        return true;
    }
}
