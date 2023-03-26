package com.livecoding.blog.controller;

import com.livecoding.blog.entity.Article;
import com.livecoding.blog.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class ArticleController {
    @Autowired
    ArticleRepository articleRepository;

    @GetMapping("articles")
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    @GetMapping("articles/{id}")
    public Article getArticle(@PathVariable Long id) {
        return articleRepository.findById(id).get();
    }

    @PostMapping("articles")
    public Article createArticle(@RequestBody Article article) {
        return articleRepository.save(article);
    }

    @PutMapping("articles/{id}")
    public Article updateArticle(@PathVariable Long id, @RequestBody Article body) {
        Article articleToUpdate = articleRepository.findById(id).get();
        articleToUpdate.setTitle(body.getTitle());
        articleToUpdate.setContent(body.getContent());
        articleToUpdate.setSlug(body.getSlug());

        return articleRepository.save(articleToUpdate);
    }

    @DeleteMapping("articles/{id}")
    public boolean deleteArticle(@PathVariable Long id) {
        articleRepository.deleteById(id);
        return true;
    }
}
